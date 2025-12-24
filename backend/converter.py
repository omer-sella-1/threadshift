"""
Core embroidery file conversion logic using pyembroidery.
Handles in-memory processing for fast, stateless conversions.
Includes smart features: hoop safety, PES v6 enforcement, color repair.
"""

import io
from typing import Tuple, Optional
import pyembroidery


# Supported file formats with their read and write functions
SUPPORTED_FORMATS = {
    "dst": ("Tajima DST", pyembroidery.read_dst, pyembroidery.write_dst),
    "pes": ("Brother PES", pyembroidery.read_pes, pyembroidery.write_pes),
    "exp": ("Melco EXP", pyembroidery.read_exp, pyembroidery.write_exp),
    "jef": ("Janome JEF", pyembroidery.read_jef, pyembroidery.write_jef),
    "xxx": ("Singer XXX", pyembroidery.read_xxx, pyembroidery.write_xxx),
    "vp3": ("Pfaff VP3", pyembroidery.read_vp3, pyembroidery.write_vp3),
    "u01": ("Barudan U01", pyembroidery.read_u01, pyembroidery.write_u01),
    "pec": ("Brother PEC", pyembroidery.read_pec, pyembroidery.write_pec),
}

# Hoop size definitions (in 0.1mm units - pyembroidery standard)
HOOP_SIZES = {
    "brother_4x4": (1000, 1000),  # 100x100mm
    "brother_5x7": (1300, 1800),  # 130x180mm
    "brother_6x10": (1600, 2600),  # 160x260mm
}

# Smart color palette for DST conversions (high contrast)
SMART_COLORS = [
    {"hex": "000000", "name": "Black"},
    {"hex": "FF0000", "name": "Red"},
    {"hex": "0000FF", "name": "Blue"},
    {"hex": "FFD700", "name": "Gold"},
    {"hex": "00FF00", "name": "Green"},
    {"hex": "FF00FF", "name": "Magenta"},
    {"hex": "00FFFF", "name": "Cyan"},
    {"hex": "FFFFFF", "name": "White"},
]


class ConversionError(Exception):
    """Custom exception for conversion errors."""
    pass


class ConversionWarning(Exception):
    """Custom exception for conversion warnings (non-fatal)."""
    pass


def apply_smart_colors(pattern: pyembroidery.EmbPattern, source_format: str):
    """
    Apply smart color palette to DST files (which have no color data).

    Args:
        pattern: The embroidery pattern
        source_format: Original file format
    """
    # Only apply to DST files (they have no color information)
    if source_format != "dst":
        return

    # Check if threads need color repair (missing or default colors)
    needs_repair = False
    if not pattern.threadlist or len(pattern.threadlist) == 0:
        needs_repair = True
    else:
        # Check if threads have valid RGB values
        for thread in pattern.threadlist:
            if not hasattr(thread, 'hex') or not thread.hex:
                needs_repair = True
                break

    if needs_repair:
        # Count color changes in the pattern
        color_changes = 0
        for stitch in pattern.stitches:
            if stitch[2] == pyembroidery.COLOR_CHANGE:
                color_changes += 1

        num_colors = min(color_changes + 1, len(SMART_COLORS))

        # Apply smart color palette
        pattern.threadlist = []
        for i in range(num_colors):
            pattern.add_thread(SMART_COLORS[i])


def check_hoop_size(pattern: pyembroidery.EmbPattern, hoop_size: str) -> Optional[str]:
    """
    Check if pattern fits in the specified hoop and scale if needed.

    Args:
        pattern: The embroidery pattern
        hoop_size: Hoop size identifier (e.g., "brother_4x4")

    Returns:
        Warning message if design is too large, None otherwise

    Raises:
        ConversionWarning: If design is too large to scale safely
    """
    if not hoop_size or hoop_size == "none":
        return None

    if hoop_size not in HOOP_SIZES:
        return None

    max_width, max_height = HOOP_SIZES[hoop_size]

    # Add 2mm safety margin (20 units in 0.1mm)
    safe_width = max_width - 20
    safe_height = max_height - 20

    # Get pattern bounds
    bounds = pattern.bounds()
    pattern_width = bounds[2] - bounds[0]
    pattern_height = bounds[3] - bounds[1]

    # Check if design fits
    if pattern_width <= safe_width and pattern_height <= safe_height:
        return None  # Fits perfectly

    # Calculate scale factor needed
    width_scale = safe_width / pattern_width if pattern_width > 0 else 1.0
    height_scale = safe_height / pattern_height if pattern_height > 0 else 1.0
    scale_factor = min(width_scale, height_scale)

    # Check if oversized by more than 10%
    oversized_percent = ((1 / scale_factor) - 1) * 100

    if oversized_percent > 10:
        # Too large to safely scale
        raise ConversionWarning(
            f"Design is {oversized_percent:.1f}% too large for {hoop_size.replace('_', ' ').title()} hoop. "
            f"Current size: {pattern_width/10:.1f}x{pattern_height/10:.1f}mm. "
            f"Safe scaling limit exceeded (>10%). Please use a larger hoop or manually resize the design."
        )

    # Scale pattern to fit
    pattern.scale(scale_factor)

    return f"Design auto-scaled {oversized_percent:.1f}% to fit {hoop_size.replace('_', ' ').title()} hoop safely."


def validate_format(format_ext: str) -> str:
    """
    Validate and normalize the file format.

    Args:
        format_ext: File extension (with or without dot)

    Returns:
        Lowercase format without dot

    Raises:
        ConversionError: If format is not supported
    """
    # Remove dot if present and convert to lowercase
    format_ext = format_ext.lower().lstrip('.')

    if format_ext not in SUPPORTED_FORMATS:
        supported = ", ".join(SUPPORTED_FORMATS.keys())
        raise ConversionError(
            f"Format '{format_ext}' is not supported. "
            f"Supported formats: {supported}"
        )

    return format_ext


def convert_embroidery_file(
    input_data: bytes,
    target_format: str,
    input_filename: str = "input",
    hoop_size: Optional[str] = None
) -> Tuple[bytes, str, Optional[str]]:
    """
    Convert an embroidery file from one format to another in-memory.
    Includes smart features: hoop safety check, PES v6 enforcement, color repair.

    Args:
        input_data: Binary data of the input file
        target_format: Target format (e.g., "pes", "dst")
        input_filename: Original filename (used for format detection)
        hoop_size: Optional hoop size for auto-scaling (e.g., "brother_4x4")

    Returns:
        Tuple of (converted_file_bytes, output_filename, warning_message)

    Raises:
        ConversionError: If conversion fails or formats are invalid
        ConversionWarning: If design is too large for hoop (>10% oversized)
    """
    try:
        # Validate target format
        target_format = validate_format(target_format)

        # Detect input format from filename
        input_ext = input_filename.rsplit('.', 1)[-1].lower() if '.' in input_filename else None

        # Create input buffer
        input_buffer = io.BytesIO(input_data)

        # Read the embroidery pattern using format-specific reader if available
        if input_ext and input_ext in SUPPORTED_FORMATS:
            _, read_func, _ = SUPPORTED_FORMATS[input_ext]
            pattern = read_func(input_buffer)
        else:
            # Try to auto-detect by attempting common formats
            pattern = None
            for fmt_ext, (_, read_func, _) in SUPPORTED_FORMATS.items():
                try:
                    input_buffer.seek(0)  # Reset buffer position
                    pattern = read_func(input_buffer)
                    if pattern and pattern.stitches:
                        break
                except Exception:
                    continue

            if not pattern:
                raise ConversionError(
                    "Unable to detect embroidery file format. "
                    f"Supported formats: {', '.join(SUPPORTED_FORMATS.keys())}"
                )

        # Check if pattern has any content
        if not pattern.stitches or len(pattern.stitches) == 0:
            raise ConversionError(
                "The input file appears to be empty or corrupt. "
                "No stitch data found."
            )

        # SMART FEATURE 1: Apply smart colors for DST → PES/JEF/etc. conversions
        if input_ext and target_format in ["pes", "jef", "vp3"]:
            apply_smart_colors(pattern, input_ext)

        # SMART FEATURE 2: Hoop Safety Check
        hoop_warning = None
        if hoop_size:
            hoop_warning = check_hoop_size(pattern, hoop_size)

        # Create output buffer
        output_buffer = io.BytesIO()

        # Get the write function for the target format
        _, _, write_func = SUPPORTED_FORMATS[target_format]

        # SMART FEATURE 3: Force PES v6 for universal compatibility
        if target_format == "pes":
            # Write PES with version 6 (most compatible)
            pyembroidery.write_pes(pattern, output_buffer, {"pes version": 6})
        else:
            # Write to target format normally
            write_func(pattern, output_buffer)

        # Get the binary data
        output_data = output_buffer.getvalue()

        # Generate output filename
        base_name = input_filename.rsplit('.', 1)[0] if '.' in input_filename else input_filename
        output_filename = f"{base_name}_converted.{target_format}"

        return output_data, output_filename, hoop_warning

    except ConversionWarning:
        # Re-raise warnings (handled by API)
        raise
    except ConversionError:
        # Re-raise our custom errors
        raise
    except Exception as e:
        # Wrap any other errors
        raise ConversionError(
            f"Failed to convert file: {str(e)}"
        ) from e


def get_supported_formats() -> dict:
    """
    Get a dictionary of supported formats.

    Returns:
        Dictionary mapping format extensions to format names
    """
    return {ext: name for ext, (name, _, _) in SUPPORTED_FORMATS.items()}


def get_pattern_info(input_data: bytes) -> dict:
    """
    Extract information from an embroidery pattern.

    Args:
        input_data: Binary data of the input file

    Returns:
        Dictionary with pattern information (stitches, colors, bounds)

    Raises:
        ConversionError: If file cannot be read
    """
    try:
        input_buffer = io.BytesIO(input_data)
        # Try all formats to read the pattern
        pattern = None
        for _, read_func, _ in SUPPORTED_FORMATS.values():
            try:
                input_buffer.seek(0)
                pattern = read_func(input_buffer)
                if pattern and pattern.stitches:
                    break
            except Exception:
                continue

        if not pattern:
            raise ConversionError("Unable to read embroidery file")

        return {
            "stitch_count": len(pattern.stitches),
            "color_count": len(pattern.threadlist),
            "bounds": {
                "width": pattern.bounds()[2] - pattern.bounds()[0],
                "height": pattern.bounds()[3] - pattern.bounds()[1],
            },
        }
    except Exception as e:
        raise ConversionError(
            f"Failed to read pattern info: {str(e)}"
        ) from e
