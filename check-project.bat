@echo off
echo VMBM Web Store - Project Structure Check
echo =========================================
echo.

echo Checking project files...
echo.

if exist "server\index.js" (
    echo ✅ Backend server file found
) else (
    echo ❌ Backend server file missing
)

if exist "client\package.json" (
    echo ✅ Frontend package.json found
) else (
    echo ❌ Frontend package.json missing
)

if exist "client\src\App.js" (
    echo ✅ React App.js found
) else (
    echo ❌ React App.js missing
)

if exist "client\src\components\" (
    echo ✅ React components folder found
) else (
    echo ❌ React components folder missing
)

if exist "package.json" (
    echo ✅ Root package.json found
) else (
    echo ❌ Root package.json missing
)

if exist "README.md" (
    echo ✅ README.md found
) else (
    echo ❌ README.md missing
)

if exist ".gitignore" (
    echo ✅ .gitignore found
) else (
    echo ❌ .gitignore missing
)

echo.
echo Checking deployment files...

if exist "vercel.json" (
    echo ✅ Vercel configuration found
) else (
    echo ❌ Vercel configuration missing
)

if exist "Procfile" (
    echo ✅ Heroku configuration found
) else (
    echo ❌ Heroku configuration missing
)

if exist "netlify.toml" (
    echo ✅ Netlify configuration found
) else (
    echo ❌ Netlify configuration missing
)

echo.
echo Project structure check completed!
echo.
echo If all items show ✅, your project is ready for GitHub upload.
echo If any items show ❌, please check the file structure.
echo.
pause
