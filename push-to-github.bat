@echo off
echo VMBM Web Store - GitHub Push Helper
echo ====================================
echo.

echo Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo ❌ Git is not installed!
    echo.
    echo Please install Git first:
    echo 1. Go to https://git-scm.com/download/win
    echo 2. Download and install Git for Windows
    echo 3. Restart your command prompt
    echo 4. Run this script again
    echo.
    pause
    exit /b 1
)

echo ✅ Git is installed!
echo.

echo Configuring Git with your email...
git config --global user.email "kkfun9@gmail.com"
echo Git email configured: kkfun9@gmail.com

set /p username="Enter your GitHub username: "
git config --global user.name "%username%"
echo Git username configured: %username%
echo.

echo Initializing Git repository...
git init
echo ✅ Git repository initialized
echo.

echo Adding all files to Git...
git add .
echo ✅ All files added
echo.

echo Creating initial commit...
git commit -m "Initial commit: VMBM Web Store - Complete React + Node.js application"
echo ✅ Initial commit created
echo.

echo Setting up main branch...
git branch -M main
echo ✅ Main branch set
echo.

set /p reponame="Enter your GitHub repository name (e.g., vmbm-webstore): "

echo.
echo Adding remote repository...
git remote add origin https://github.com/%username%/%reponame%.git
echo ✅ Remote repository added
echo.

echo Pushing to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ❌ Push failed!
    echo.
    echo Common solutions:
    echo 1. Create the repository on GitHub first
    echo 2. Check your GitHub credentials
    echo 3. Use Personal Access Token as password
    echo.
    echo To create repository:
    echo 1. Go to https://github.com/new
    echo 2. Repository name: %reponame%
    echo 3. Make it Public
    echo 4. Don't initialize with README
    echo 5. Click "Create repository"
    echo.
    echo Then run this script again.
    pause
    exit /b 1
)

echo.
echo 🎉 SUCCESS! Your VMBM Web Store has been pushed to GitHub!
echo.
echo Your repository is now available at:
echo https://github.com/%username%/%reponame%
echo.
echo Next steps:
echo 1. Go to your repository on GitHub
echo 2. Verify all files are uploaded
echo 3. Follow PAAS_DEPLOYMENT.md to deploy your app
echo.
pause
