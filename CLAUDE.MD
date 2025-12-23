# Project: ThreadShifter (Embroidery File Converter)

## 1. Project Overview
**Mission:** Build a free, web-based tool that allows users (crafters/makers) to instantly convert embroidery machine files (e.g., .DST to .PES) without installing expensive software.
**Core Value:** Simplicity, speed, and privacy (no account required).
**Vibe:** "Canva for Embroidery" — Clean, trustworthy, pastel/crafty aesthetic.

## 2. Tech Stack & Architecture

### **Frontend (The Face)**
* **Framework:** Next.js 14+ (App Router).
* **Language:** TypeScript (Strict mode).
* **Styling:** Tailwind CSS (Mobile-first).
* **Icons:** Lucide React.
* **State Management:** React `useState` / `useReducer` (Keep it simple).
* **HTTP Client:** Native `fetch` or Axios.
* **Hosting:** Vercel.

### **Backend (The Muscle)**
* **Language:** Python 3.10+.
* **Framework:** FastAPI (for speed and auto-generated docs).
* **Core Library:** `pyembroidery` (handles the conversion logic).
* **Response Handling:** `StreamingResponse` or `FileResponse` for downloads.
* **Hosting:** Render (Dockerized) or Vercel Serverless Functions (Python runtime).

## 3. Core Features & User Flow

### **Phase 1: MVP Flow**
1.  **Upload:** User drags & drops a file (Supported: .DST, .PES, .EXP, .JEF, .XXX).
2.  **Select:** User selects target format from a dropdown (e.g., "Convert to Brother .PES").
3.  **Process:** Frontend sends file + target format to Backend API.
4.  **Backend Logic:**
    * Receive file in memory (do not save to disk long-term).
    * Use `pyembroidery` to read input.
    * Use `pyembroidery` to write output buffer.
    * Return file stream to frontend.
5.  **Download:** Browser automatically triggers the download of the converted file.

## 4. API Contract

### **POST /api/convert**
* **Request Type:** `multipart/form-data`
* **Parameters:**
    * `file`: The binary embroidery file.
    * `target_format`: String (e.g., "pes", "dst", "exp").
* **Response:**
    * `200 OK`: Binary file stream (Content-Disposition: attachment).
    * `400 Bad Request`: "Unsupported file format" or "Corrupt file".
    * `413 Payload Too Large`: If file > 10MB.

## 5. Coding Guidelines & Constraints

### **General**
* **Stateless:** The app must be stateless. No database. No user accounts.
* **Privacy:** Files are processed in memory and discarded immediately after conversion.

### **Frontend Guidelines**
* Use "Client Components" (`"use client"`) only where interaction is needed (Dropzone, Select).
* UI should be resilient: Handle loading states ("Converting...") and error states gracefully.
* Use a `components/` directory for reusable UI elements (Button, Dropzone, Header).

### **Backend Guidelines**
* Use Type Hints in Python.
* Wrap `pyembroidery` operations in `try/except` blocks to catch malformed files.
* Use `io.BytesIO` to handle file streams in memory (avoid writing temp files to disk if possible for speed).

## 6. Directory Structure Target
```text
/threadshift
├── CLAUDE.md          # Project Context
├── frontend/          # Next.js App
│   ├── app/
│   ├── components/
│   └── public/
└── backend/           # FastAPI App
    ├── main.py        # API Entry point
    ├── converter.py   # Core logic wrapper
    └── requirements.txt

7. Development Roadmap
Phase A: The Engine (Backend)
[ ] Setup: Initialize Python environment and install pyembroidery.

[ ] Core Logic: Write converter.py to handle reading/writing of patterns using io.BytesIO (in-memory processing).

[ ] Validation: Verify support for key formats (.PES, .DST, .JEF, .EXP, .XXX).

[ ] API Endpoint: Create FastAPI route POST /convert to accept multipart/form-data and return the file stream.

Phase B: The Interface (Frontend)
[ ] Scaffold: Initialize Next.js project with TypeScript and Tailwind CSS.

[ ] UI Components: Build Dropzone, FormatSelector, and DownloadButton components.

[ ] Integration: Connect the Dropzone state to the POST /convert API.

[ ] Feedback Loop: Implement loading spinners during conversion and error toasts for failed uploads.

Phase C: Polish & Deploy
[ ] Cleanup: Ensure no temp files remain (if disk writing is used) or verify memory cleanup.

[ ] Styling: Apply the "Crafty/Clean" pastel aesthetic.

[ ] Deployment: Deploy Frontend to Vercel and Backend to Render (or Vercel Python Runtime).