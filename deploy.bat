@echo off
echo VMBM Web Store - PaaS Deployment Helper
echo ======================================
echo.

echo Choose your deployment platform:
echo 1. Vercel (Recommended for React)
echo 2. Heroku (Best for Node.js)
echo 3. Netlify (Alternative)
echo.

set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" goto vercel
if "%choice%"=="2" goto heroku
if "%choice%"=="3" goto netlify
goto invalid

:vercel
echo.
echo Deploying to Vercel...
echo 1. Go to https://vercel.com
echo 2. Sign up/Login
echo 3. Click "New Project"
echo 4. Upload your project folder
echo 5. Vercel will auto-deploy your app
echo.
echo Your app will be live at: https://your-project-name.vercel.app
goto end

:heroku
echo.
echo Deploying to Heroku...
echo 1. Install Heroku CLI from https://devcenter.heroku.com/articles/heroku-cli
echo 2. Run: heroku login
echo 3. Run: heroku create vmbm-webstore
echo 4. Run: git push heroku main
echo.
echo Your app will be live at: https://vmbm-webstore.herokuapp.com
goto end

:netlify
echo.
echo Deploying to Netlify...
echo 1. Go to https://netlify.com
echo 2. Sign up/Login
echo 3. Drag and drop your project folder
echo 4. Or connect your Git repository
echo.
echo Your app will be live at: https://random-name.netlify.app
goto end

:invalid
echo Invalid choice. Please run the script again and choose 1, 2, or 3.
goto end

:end
echo.
echo For detailed instructions, see PAAS_DEPLOYMENT.md
echo.
pause
