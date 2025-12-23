"""
FastAPI backend for ThreadShift embroidery file converter.
Provides a simple REST API for converting embroidery files.
"""

from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import Response, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import logging

from converter import (
    convert_embroidery_file,
    get_supported_formats,
    get_pattern_info,
    ConversionError,
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="ThreadShift API",
    description="Convert embroidery machine files instantly",
    version="1.0.0",
)

# Add CORS middleware for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# File size limit: 10MB
MAX_FILE_SIZE = 10 * 1024 * 1024


@app.get("/")
async def root():
    """Health check endpoint."""
    return {
        "status": "ok",
        "service": "ThreadShift API",
        "version": "1.0.0",
    }


@app.get("/api/formats")
async def get_formats():
    """
    Get list of supported embroidery file formats.

    Returns:
        Dictionary of supported formats with descriptions
    """
    return {
        "formats": get_supported_formats()
    }


@app.post("/api/convert")
async def convert_file(
    file: UploadFile = File(...),
    target_format: str = Form(...),
):
    """
    Convert an embroidery file to a different format.

    Args:
        file: Uploaded embroidery file
        target_format: Target format extension (e.g., "pes", "dst")

    Returns:
        Converted file as binary stream

    Raises:
        HTTPException: 400 for invalid input, 413 for file too large
    """
    try:
        # Read file data
        file_data = await file.read()

        # Check file size
        if len(file_data) > MAX_FILE_SIZE:
            raise HTTPException(
                status_code=413,
                detail=f"File too large. Maximum size is {MAX_FILE_SIZE / (1024*1024)}MB"
            )

        # Check if file is empty
        if len(file_data) == 0:
            raise HTTPException(
                status_code=400,
                detail="Uploaded file is empty"
            )

        logger.info(
            f"Converting {file.filename} ({len(file_data)} bytes) to {target_format}"
        )

        # Perform conversion
        output_data, output_filename = convert_embroidery_file(
            input_data=file_data,
            target_format=target_format,
            input_filename=file.filename or "embroidery"
        )

        logger.info(
            f"Successfully converted to {output_filename} ({len(output_data)} bytes)"
        )

        # Return file as download
        return Response(
            content=output_data,
            media_type="application/octet-stream",
            headers={
                "Content-Disposition": f'attachment; filename="{output_filename}"',
                "Access-Control-Expose-Headers": "Content-Disposition",
            }
        )

    except ConversionError as e:
        logger.error(f"Conversion error: {str(e)}")
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except HTTPException:
        # Re-raise HTTP exceptions as-is
        raise
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred during conversion"
        )


@app.post("/api/info")
async def get_file_info(file: UploadFile = File(...)):
    """
    Get information about an embroidery file without converting it.

    Args:
        file: Uploaded embroidery file

    Returns:
        JSON with pattern information (stitch count, colors, dimensions)
    """
    try:
        # Read file data
        file_data = await file.read()

        # Check file size
        if len(file_data) > MAX_FILE_SIZE:
            raise HTTPException(
                status_code=413,
                detail=f"File too large. Maximum size is {MAX_FILE_SIZE / (1024*1024)}MB"
            )

        # Get pattern info
        info = get_pattern_info(file_data)

        return JSONResponse(content={
            "filename": file.filename,
            "size_bytes": len(file_data),
            **info
        })

    except ConversionError as e:
        logger.error(f"Error reading file info: {str(e)}")
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred while reading file"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
