"""
Test script for embroidery file conversion.
Creates a simple test pattern and tests conversions.
"""

import time
import pyembroidery
from converter import convert_embroidery_file, get_pattern_info, ConversionError


def create_test_pattern() -> bytes:
    """
    Create a simple test embroidery pattern and return as DST bytes.
    Creates a simple square shape.
    """
    pattern = pyembroidery.EmbPattern()

    # Add a simple square pattern (10x10mm)
    pattern.add_stitch_absolute(0, 0, pyembroidery.STITCH)
    pattern.add_stitch_absolute(100, 0, pyembroidery.STITCH)
    pattern.add_stitch_absolute(100, 100, pyembroidery.STITCH)
    pattern.add_stitch_absolute(0, 100, pyembroidery.STITCH)
    pattern.add_stitch_absolute(0, 0, pyembroidery.STITCH)
    pattern.add_stitch_absolute(pyembroidery.END, pyembroidery.END, pyembroidery.END)

    # Add thread color
    pattern.add_thread({"hex": "FF0000", "name": "Red"})

    # Write to bytes (DST format)
    import io
    buffer = io.BytesIO()
    pyembroidery.write_dst(pattern, buffer)
    return buffer.getvalue()


def test_conversion(source_format: str, target_format: str, test_data: bytes):
    """Test a single conversion."""
    print(f"\n{'='*60}")
    print(f"Testing: {source_format.upper()} → {target_format.upper()}")
    print(f"{'='*60}")

    try:
        # Time the conversion
        start_time = time.time()

        output_data, output_filename = convert_embroidery_file(
            input_data=test_data,
            target_format=target_format,
            input_filename=f"test.{source_format}"
        )

        elapsed_time = (time.time() - start_time) * 1000  # Convert to milliseconds

        # Get info about converted file
        info = get_pattern_info(output_data)

        print(f"✓ Conversion successful!")
        print(f"  Output file: {output_filename}")
        print(f"  Input size: {len(test_data)} bytes")
        print(f"  Output size: {len(output_data)} bytes")
        print(f"  Stitch count: {info['stitch_count']}")
        print(f"  Color count: {info['color_count']}")
        print(f"  Dimensions: {info['bounds']['width']:.1f} x {info['bounds']['height']:.1f}")
        print(f"  Conversion time: {elapsed_time:.2f} ms")

        return True

    except ConversionError as e:
        print(f"✗ Conversion failed: {e}")
        return False
    except Exception as e:
        print(f"✗ Unexpected error: {e}")
        return False


def main():
    """Run all conversion tests."""
    print("\n" + "="*60)
    print("ThreadShifter Embroidery Converter - Local Test")
    print("="*60)

    # Create test pattern
    print("\nCreating test pattern (simple square)...")
    test_data = create_test_pattern()
    print(f"✓ Test pattern created: {len(test_data)} bytes")

    # Test conversions
    formats_to_test = ["pes", "exp", "jef", "xxx", "vp3", "dst"]
    successful = 0
    total = len(formats_to_test)

    for target_format in formats_to_test:
        if test_conversion("dst", target_format, test_data):
            successful += 1

    # Summary
    print(f"\n{'='*60}")
    print(f"Test Summary: {successful}/{total} conversions successful")
    print(f"{'='*60}\n")

    if successful == total:
        print("🎉 All tests passed! The converter is working correctly.")
        return 0
    else:
        print(f"⚠️  {total - successful} test(s) failed.")
        return 1


if __name__ == "__main__":
    exit(main())
