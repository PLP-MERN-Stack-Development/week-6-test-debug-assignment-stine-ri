# 🐞 MERN Bug Tracker

A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js) with comprehensive testing and debugging implementations.


## 🚀 Features

- **User-friendly Interface** (Tailwind CSS)
- **CRUD Operations** for bug tracking
- **Testing**:
  - Backend: Jest + Supertest
  - Frontend: React Testing Library
- **Debugging Tools**:
  - Error Boundaries (React)
  - Express error middleware
  - Console logging
- **Status Tracking**:
  - Open / In-progress / Resolved

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Node.js, Express, MongoDB
- **Testing**: Jest, Supertest, React Testing Library
- **Linting**: ESLint

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas URI)
- PNPM (or npm/yarn)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-bug-tracker.git
   cd mern-bug-tracker


## Install dependencies for both frontend and backend:

# Backend
cd server
pnpm install

# Frontend
cd ../client
pnpm install

## Set up environment variables:

Create .env in server/:


MONGO_URI=mongodb://localhost:27017/
PORT=5000
## 🏃 Running the Application
Start the backend:
 cd server
 pnpm start

Start the frontend (in another terminal):

   cd client
   pnpm dev

Access the app at: http://localhost:5173

## 🧪 Testing 

Backend Tests

  cd server
  pnpm test
Frontend Tests

   cd client
   pnpm test
## 🐛 Debugging
Backend
  Use console.log() strategically
  Debug with Chrome DevTools:
  node --inspect server.js

Frontend
    React DevTools extension
    Error Boundaries component
     Browser console logs

## 📂 Project Structure


mern-bug-tracker/
├── client/                  # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── tests/           # Frontend tests
│   ├── vite.config.js
├── server/                  # Backend (Express)
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── tests/               # Backend tests
│   ├── server.js            # Express server

## 📝 Documentation

Testing Approach
Error Handling

## 🤝 Contributing

Fork the project

Create your feature branch
Commit your changes 
Push to the branch 
Open a Pull Request

## 📜 License
Distributed under the MIT License.

## ✉️ Contact
Your Name - christinenyambwari@gmail.com

Project Link: https://github.com/PLP-MERN-Stack-Development/week-6-test-debug-assignment-stine-ri.git