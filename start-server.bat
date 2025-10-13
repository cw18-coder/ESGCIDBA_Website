@echo off
REM Quick Start Script for DBA Thesis Website
REM This script helps you start a local web server to preview the website

echo ====================================
echo DBA Thesis Website - Quick Start
echo ====================================
echo.

REM Check for Python
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [*] Python detected. Starting web server...
    echo [*] Website will be available at: http://localhost:8000
    echo [*] Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
    goto :end
)

REM Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [*] Node.js detected. Checking for http-server...
    
    REM Check if http-server is installed
    where http-server >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo [*] Starting web server...
        echo [*] Website will be available at: http://localhost:8000
        echo [*] Press Ctrl+C to stop the server
        echo.
        http-server -p 8000
    ) else (
        echo [!] http-server not found. Installing...
        npm install -g http-server
        echo [*] Starting web server...
        echo [*] Website will be available at: http://localhost:8000
        echo [*] Press Ctrl+C to stop the server
        echo.
        http-server -p 8000
    )
    goto :end
)

echo [ERROR] Neither Python nor Node.js found!
echo.
echo Please install one of the following:
echo - Python 3: https://www.python.org/downloads/
echo - Node.js: https://nodejs.org/
echo.
echo Or use the VS Code Live Server extension.
pause
goto :end

:end
