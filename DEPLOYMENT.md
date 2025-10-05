# VMBM Web Store - Deployment Guide

## Quick Start (Windows)

1. **Double-click `start.bat`** - This will automatically install dependencies and start the application
2. Open your browser and go to `http://localhost:3000`

## Quick Start (Linux/Mac)

1. **Run `chmod +x start.sh`** to make the script executable
2. **Run `./start.sh`** to start the application
3. Open your browser and go to `http://localhost:3000`

## Manual Setup

### Step 1: Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Step 2: Configure Email (Optional)
Create a `.env` file in the root directory:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@vmbm.com
```

**Note:** Email configuration is optional. The application will work without it, but order confirmations and enquiry notifications won't be sent.

### Step 3: Start the Application
```bash
# For development (both frontend and backend)
npm run dev

# For production
npm run build
npm start
```

## Production Deployment

### Option 1: Simple Server Deployment

1. **Upload files** to your web server
2. **Install Node.js** on your server
3. **Run setup commands:**
   ```bash
   npm install
   cd client && npm install && npm run build && cd ..
   npm start
   ```
4. **Configure reverse proxy** (nginx/apache) to serve the React app and proxy API calls

### Option 2: PM2 Process Manager

1. **Install PM2:** `npm install -g pm2`
2. **Start with PM2:** `pm2 start server/index.js --name vmbm-webstore`
3. **Save PM2 config:** `pm2 save`
4. **Setup auto-restart:** `pm2 startup`

### Option 3: Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM node:16-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY client/package*.json ./client/

# Install dependencies
RUN npm install
RUN cd client && npm install && npm run build

# Copy source code
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t vmbm-webstore .
docker run -p 5000:5000 vmbm-webstore
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `EMAIL_USER` | Email address for sending notifications | - |
| `EMAIL_PASS` | Email password/app password | - |
| `ADMIN_EMAIL` | Admin email for receiving enquiries | - |

## Troubleshooting

### Common Issues

1. **Port already in use:**
   - Change PORT in `.env` file
   - Or kill the process using the port: `netstat -ano | findstr :5000`

2. **Email not working:**
   - Check email credentials in `.env`
   - For Gmail, use App Password instead of regular password
   - Enable 2-factor authentication first

3. **Frontend not loading:**
   - Make sure both backend (port 5000) and frontend (port 3000) are running
   - Check browser console for errors

4. **Dependencies installation fails:**
   - Update Node.js to latest version
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and run `npm install` again

### Support

If you encounter any issues:
1. Check the console logs for error messages
2. Ensure all dependencies are installed correctly
3. Verify environment variables are set properly
4. Contact your technical support team
