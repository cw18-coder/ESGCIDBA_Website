#!/bin/bash
# Quick Start Script for DBA Thesis Website
# This script helps you start a local web server to preview the website

echo "===================================="
echo "DBA Thesis Website - Quick Start"
echo "===================================="
echo ""

# Check for Python 3
if command -v python3 &> /dev/null; then
    echo "[*] Python 3 detected. Starting web server..."
    echo "[*] Website will be available at: http://localhost:8000"
    echo "[*] Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
    exit 0
fi

# Check for Python (if python3 command not found)
if command -v python &> /dev/null; then
    echo "[*] Python detected. Starting web server..."
    echo "[*] Website will be available at: http://localhost:8000"
    echo "[*] Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
    exit 0
fi

# Check for Node.js
if command -v node &> /dev/null; then
    echo "[*] Node.js detected. Checking for http-server..."
    
    # Check if http-server is installed
    if command -v http-server &> /dev/null; then
        echo "[*] Starting web server..."
        echo "[*] Website will be available at: http://localhost:8000"
        echo "[*] Press Ctrl+C to stop the server"
        echo ""
        http-server -p 8000
    else
        echo "[!] http-server not found. Installing..."
        npm install -g http-server
        echo "[*] Starting web server..."
        echo "[*] Website will be available at: http://localhost:8000"
        echo "[*] Press Ctrl+C to stop the server"
        echo ""
        http-server -p 8000
    fi
    exit 0
fi

# No suitable server found
echo "[ERROR] Neither Python nor Node.js found!"
echo ""
echo "Please install one of the following:"
echo "- Python 3: https://www.python.org/downloads/"
echo "- Node.js: https://nodejs.org/"
echo ""
echo "Or use the VS Code Live Server extension."
exit 1
