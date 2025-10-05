#!/bin/bash

echo "Starting VMBM Web Store..."
echo

echo "Installing backend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Error installing backend dependencies"
    exit 1
fi

echo
echo "Installing frontend dependencies..."
cd client
npm install
if [ $? -ne 0 ]; then
    echo "Error installing frontend dependencies"
    exit 1
fi
cd ..

echo
echo "Starting the application..."
echo "Backend will run on http://localhost:5000"
echo "Frontend will run on http://localhost:3000"
echo
echo "Press Ctrl+C to stop the server"
echo

npm run dev
