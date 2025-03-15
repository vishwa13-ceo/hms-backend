
---

```markdown
# 🏥 Hospital Management System (Backend)

A backend API for managing hospital operations, built with **Node.js**, **Express**, and **MongoDB**. Supports role-based access for admins, doctors, receptionists, and patients.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green)

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Setup](#-setup)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)

---

## 🚀 Features
1. **Role-Based Access Control**:
   - `Admin`: Manage users and generate reports.
   - `Doctor`: Confirm appointments and add prescriptions.
   - `Receptionist`: Approve/reject appointments.
   - `Patient`: Book appointments and view prescriptions.

2. **Key Modules**:
   - User registration/login with JWT authentication.
   - Appointment scheduling with status tracking.
   - Prescription management for doctors.

---

## 💻 Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: Bcrypt password hashing

---

## ⚙️ Setup

### Prerequisites
- Node.js (v18+)
- MongoDB ([Install locally](https://www.mongodb.com/) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/hms-backend.git
   cd hms-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/hms
   JWT_SECRET=your_jwt_secret_here
   ```

4. **Start the server**:
   ```bash
   npm run dev
   ```
   Server runs at `http://localhost:5000`.

---

## 📚 API Documentation

### Authentication
| Endpoint            | Method | Role   | Description                |
|---------------------|--------|--------|----------------------------|
| `/api/auth/register`| POST   | Public | Register a new user        |
| `/api/auth/login`   | POST   | Public | Login and get JWT token    |

**Example Request (Register)**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "12345678",
  "role": "patient",
  "phone": "1234567890"
}
```

---

### Appointments
| Endpoint                     | Method | Role         | Description                |
|------------------------------|--------|--------------|----------------------------|
| `/api/appointments`          | POST   | Patient      | Create a new appointment   |
| `/api/appointments/:id`      | PATCH  | Doctor       | Update appointment status  |

**Example Request (Create Appointment)**:
```json
{
  "patient": "64f1a2b3c4d5e6f7a8b9c0d1",
  "doctor": "64f1a2b3c4d5e6f7a8b9c0d2",
  "date": "2024-10-10T10:00:00Z",
  "notes": "Regular checkup"
}
```

---

### Prescriptions
| Endpoint                     | Method | Role   | Description                |
|------------------------------|--------|--------|----------------------------|
| `/api/prescriptions`         | POST   | Doctor | Add a new prescription     |

**Example Request**:
```json
{
  "appointment": "64f1a2b3c4d5e6f7a8b9c0d3",
  "medicines": [
    { "name": "Paracetamol", "dosage": "500mg" }
  ],
  "instructions": "Take twice daily after meals"
}
```

---

## 🗂️ Project Structure
```
hms-backend/
├── config/               # Database connection
│   └── db.js
├── controllers/         # Business logic
│   ├── authController.js
│   ├── appointmentController.js
│   └── prescriptionController.js
├── models/              # MongoDB schemas
│   ├── User.js
│   ├── Appointment.js
│   └── Prescription.js
├── middleware/          # Auth and validation
│   └── auth.js
├── routes/              # API endpoints
│   ├── authRoutes.js
│   ├── appointmentRoutes.js
│   └── prescriptionRoutes.js
├── server.js            # Entry point
└── .env                 # Environment variables
```

---


