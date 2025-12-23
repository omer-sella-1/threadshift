"""
Core embroidery file conversion logic using pyembroidery.
Handles in-memory processing for fast, stateless conversions.
"""

import io
from typing import Tuple
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


class ConversionError(Exception):
    """Custom exception for conversion errors."""
    pass


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
    input_filename: str = "input"
) -> Tuple[bytes, str]:
    """
    Convert an embroidery file from one format to another in-memory.

    Args:
        input_data: Binary data of the input file
        target_format: Target format (e.g., "pes", "dst")
        input_filename: Original filename (used for format detection)

    Returns:
        Tuple of (converted_file_bytes, output_filename)

    Raises:
        ConversionError: If conversion fails or formats are invalid
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

        # Create output buffer
        output_buffer = io.BytesIO()

        # Get the write function for the target format
        _, _, write_func = SUPPORTED_FORMATS[target_format]

        # Write to target format
        write_func(pattern, output_buffer)

        # Get the binary data
        output_data = output_buffer.getvalue()

        # Generate output filename
        base_name = input_filename.rsplit('.', 1)[0] if '.' in input_filename else input_filename
        output_filename = f"{base_name}_converted.{target_format}"

        return output_data, output_filename

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
