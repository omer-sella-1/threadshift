# ThreadShifter

**Free, instant embroidery file converter** - Convert embroidery machine files without installing expensive software.

## Overview

ThreadShifter is a web-based tool that allows crafters and makers to convert embroidery files between different machine formats (DST, PES, JEF, EXP, XXX, VP3, U01, PEC) instantly and privately.

### Core Values
- **Simplicity**: Drag, drop, convert - done in under a minute
- **Speed**: Lightning-fast in-memory conversion (< 2ms)
- **Privacy**: No accounts, no data storage - files processed in memory only

## Tech Stack

### Backend
- **Python 3.10+** with FastAPI
- **pyembroidery** for conversion logic
- **uvicorn** for ASGI server

### Frontend
- **Next.js 14+** (App Router)
- **TypeScript** (Strict mode)
- **Tailwind CSS** (Mobile-first)

## Project Structure

```
threadshift/
├── backend/           # FastAPI backend
│   ├── main.py       # API endpoints
│   ├── converter.py  # Conversion logic
│   └── requirements.txt
├── frontend/         # Next.js frontend (coming soon)
└── CLAUDE.md        # Project context
```

## Getting Started

### Backend

1. Install dependencies:
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
```

2. Start the server:
```bash
python backend/main.py
```

Server runs on http://localhost:8000

### API Endpoints

- `GET /` - Health check
- `GET /api/formats` - List supported formats
- `POST /api/convert` - Convert files
  - Form data: `file` (binary), `target_format` (string)
- `POST /api/info` - Get pattern information

## Supported Formats

- **DST** - Tajima
- **PES** - Brother
- **EXP** - Melco
- **JEF** - Janome
- **XXX** - Singer
- **VP3** - Pfaff
- **U01** - Barudan
- **PEC** - Brother

## Development

See [CLAUDE.md](./CLAUDE.md) for detailed project context and guidelines.

## License

MIT
