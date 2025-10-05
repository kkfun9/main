@echo off
echo Testing VMBM Web Store Build...
echo ================================
echo.

echo Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend dependencies failed
    pause
    exit /b 1
)

echo.
echo Installing frontend dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend dependencies failed
    pause
    exit /b 1
)

echo.
echo Building React application...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: React build failed
    pause
    exit /b 1
)

cd ..

echo.
echo ✅ Build test completed successfully!
echo Your application is ready for deployment.
echo.
echo Next steps:
echo 1. Run deploy.bat to choose deployment platform
echo 2. Or follow instructions in PAAS_DEPLOYMENT.md
echo.
pause
