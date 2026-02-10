# NestJS Authentication System

A modern, production-ready authentication system built with **NestJS** (latest version) featuring JWT-based authentication, MongoDB integration, and comprehensive user management.

## 🎯 Overview

This is the latest iteration of the authentication system series, implementing enterprise-grade authentication practices with NestJS framework. It provides a robust backend API for user registration, login, logout, and session management with secure password hashing and JWT token-based authentication.

## ✨ Features

- **User Registration** - Secure user registration with password hashing (bcrypt)
- **User Login** - JWT-based authentication with secure cookie management
- **User Logout** - Session termination and cookie clearing
- **Password Security** - Industry-standard bcrypt password hashing (10 salt rounds)
- **JWT Tokens** - Stateless authentication with 1-hour token expiration
- **Cookie Management** - HttpOnly, Secure cookie handling for enhanced security
- **Data Validation** - Comprehensive input validation using class-validator
- **MongoDB Integration** - Document-based data persistence with Mongoose ODM
- **Environment Configuration** - Global configuration management via .env
- **Global Validation Pipes** - Automatic request sanitization
- **RESTful API** - Standard REST endpoints for all operations

## 🛠️ Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| **@nestjs/core** | ^11.0.1 | Core NestJS framework |
| **@nestjs/common** | ^11.0.1 | Common utilities and decorators |
| **@nestjs/jwt** | ^11.0.2 | JWT token generation and verification |
| **@nestjs/mongoose** | ^11.0.4 | MongoDB ODM integration |
| **@nestjs/config** | ^4.0.3 | Environment configuration management |
| **mongoose** | ^9.2.0 | MongoDB object modeling |
| **bcrypt** | ^6.0.0 | Password hashing |
| **class-validator** | ^0.14.3 | DTO validation |
| **class-transformer** | ^0.5.1 | DTO transformation |
| **cookie-parser** | ^1.4.7 | Cookie parsing middleware |

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Git** for version control

## 🚀 Installation

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Environment Variables
Create a `.env` file in the project root with the following variables:

```env
# Server Configuration
PORT=3000

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/auth-system
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/auth-system
```

## 📦 Running the Application

### Development Mode
```bash
npm run start:dev
```
Runs with automatic reload on file changes.

### Debug Mode
```bash
npm run start:debug
```
Runs with Node debugger enabled.

### Production Build
```bash
npm run build
npm run start:prod
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# Watch mode tests
npm run test:watch

# Test coverage
npm run test:cov

# E2E tests
npm run test:e2e
```

## 📝 Code Quality

```bash
# Format code
npm run format

# Lint and fix
npm run lint
```

## 🔐 API Endpoints

### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully"
}
```

### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful"
}
```
Sets a secure HTTP-only cookie with JWT token.

### Logout User
```http
POST /auth/logout
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

## 📂 Project Structure

```
nest/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── dto/
│   │   │   ├── create-auth.dto.ts
│   │   │   ├── login-auth.dto.ts
│   │   │   └── update-auth.dto.ts
│   │   └── entities/
│   │       └── auth.entity.ts
│   ├── users/
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   └── schemas/
│   │       └── user.schema.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
└── tsconfig.json
```

## 🔄 Authentication Flow

```
User Request
    ↓
Input Validation (Global ValidationPipe)
    ↓
Controller Handler
    ↓
Auth Service
    ↓
Users Service (Database)
    ↓
JWT Token Generation
    ↓
Set Secure Cookie
    ↓
Response
```

## 🛡️ Security Features

1. **Password Hashing**: Bcrypt with 10 salt rounds
2. **JWT Tokens**: Stateless authentication with 1-hour expiration
3. **HttpOnly Cookies**: Prevents XSS attacks
4. **Input Validation**: Class-validator DTO validation
5. **Global Validation Pipe**: Automatic request sanitization
6. **Error Handling**: Comprehensive exception handling

## 📊 Database Schema

### User Schema (MongoDB)
```javascript
{
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

## 🚨 Common Issues & Solutions

### MongoDB Connection Failed
- Verify MongoDB is running
- Check `MONGO_URI` in `.env`
- For MongoDB Atlas, ensure IP is whitelisted
- Verify credentials if using authentication

### JWT Token Errors
- Ensure `JWT_SECRET` is set in `.env`
- Check token expiration (default: 1 hour)
- Verify cookie is being sent with requests

## 🌟 Future Enhancements

- Add refresh token functionality
- Implement role-based access control (RBAC)
- Add email verification
- Implement password reset functionality
- Add rate limiting for login attempts
- Setup logging and monitoring
- Add API documentation with Swagger

## 📧 Related Projects

This is part of the Authentication System Evolution series:
- **Vanilla JS**: Pure JavaScript implementation
- **React**: React-based frontend
- **Node.js**: Express.js backend
- **Next.js**: Full-stack Next.js application
- **NestJS**: Enterprise-grade backend (this project)

## 📄 License

UNLICENSED - Proprietary
