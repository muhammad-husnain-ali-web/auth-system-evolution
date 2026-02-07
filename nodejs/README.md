# Auth Integration - Node.js Backend

A robust authentication backend API built with **Express.js**, **MongoDB**, and **JWT**. This server provides secure user registration, login, and session management endpoints designed to work seamlessly with any frontend framework (React, Next.js, or Vanilla JS).

## Features

- **User Registration API** - Register new users with name, email, and password validation
- **User Login API** - Secure login with JWT token generation and cookie-based session management
- **Logout Function** - Clear authentication tokens and end user sessions
- **Password Security** - Bcrypt hashing for secure password storage
- **JWT Authentication** - Token-based authentication with 1-hour expiration
- **MongoDB Integration** - Persistent user data storage with Mongoose ODM
- **Error Handling** - Comprehensive error responses for all endpoints
- **CORS Ready** - Configured to work with frontend applications
- **Environment Variables** - Secure configuration management with dotenv

## Tech Stack

- **Express.js 5.2** - Fast and minimalist web framework
- **Node.js** - JavaScript runtime
- **MongoDB 9.1** - NoSQL database
- **Mongoose 9.1** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Token-based authentication
- **Bcrypt 6.0** - Password hashing and verification
- **Cookie Parser** - HTTP cookie parsing
- **Body Parser** - Request body parsing middleware

## Project Structure

```
nodejs/
├── config/
│   └── connectDB.js              # MongoDB connection configuration
├── models/
│   └── Users.js                  # User schema and model definition
├── package.json                  # Project dependencies
├── server.js                     # Main Express server file
└── README.md                     # This file
```

## Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **npm** (Node Package Manager)

### Setup Steps

1. **Navigate to the project directory:**
   ```bash
   cd nodejs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the project root:**
   ```env
   MONGO_URI=mongodb://localhost:27017
   JWT_SECRET=your_secret_key_here
   PORT=3000
   ```

   - **MONGO_URI**: MongoDB connection string
   - **JWT_SECRET**: Secret key for signing JWT tokens (use a strong, random string)
   - **PORT**: Server port (default: 3000)

4. **Start the server:**
   ```bash
   npm start
   ```
   or for development with auto-reload:
   ```bash
   npm run dev
   ```
   (Add this script to package.json: `"dev": "nodemon server.js"`)

The server will start on `http://localhost:3000`

## API Endpoints

### 1. Home Endpoint
```
GET /
```
**Response:**
```json
Hello World!
```

### 2. User Registration
```
POST /register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "User already exists"
}
```

### 3. User Login
```
POST /login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful"
}
```
Sets HTTP-only cookie with JWT token (expires in 1 hour)

**Error Response (400):**
```json
{
  "success": false,
  "message": "User not found"
}
```
or
```json
{
  "success": false,
  "message": "Invalid password"
}
```

### 4. User Logout
```
GET /logout
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Logout successful"
}
```
Clears the authentication cookie

**Error Response (400):**
```json
{
  "success": false,
  "message": "Server error"
}
```

## User Schema

```javascript
{
  _id: ObjectId,              // MongoDB generated ID
  name: String,               // User's full name (required)
  email: String,              // User's email (required, unique)
  password: String,           // Bcrypt hashed password (required)
  createdAt: Date            // Account creation timestamp
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017` |
| `JWT_SECRET` | Secret key for JWT signing | `your_random_secret_key` |
| `PORT` | Server port | `3000` |

## Security Considerations

- Passwords are hashed with bcrypt (10 rounds)
- JWT tokens expire in 1 hour
- HTTP-only cookies prevent XSS attacks
- Email uniqueness enforced in database
- Sensitive data stored in environment variables

### For Production:
- Set `secure: true` in cookie options (line 52) when using HTTPS
- Use strong, random JWT_SECRET
- Enable CORS with specific origin domains
- Validate and sanitize all inputs
- Use rate limiting for authentication endpoints
- Implement refresh token mechanism for better security

## Database Setup

### MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Use it in MONGO_URI:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
   ```

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string:
   ```
   MONGO_URI=mongodb://localhost:27017
   ```

## Testing the API

### Using cURL

**Register:**
```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"pass123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'
```

**Logout:**
```bash
curl -X GET http://localhost:3000/logout
```

### Using Postman
1. Import the endpoints above
2. Set Content-Type to `application/json`
3. Use the request body examples provided
4. Cookies will be automatically stored after login

## Integration with Frontend

This backend is designed to work with any frontend framework:

- **React Version**: [../react](../react) - Uses Context API for state management
- **Next.js Version**: [../nestjs](../nestjs) - Server-side and client-side components
- **Vanilla JS**: [../vanilla](../vanilla) - Plain JavaScript with localStorage

### Frontend Setup Example (React)
```javascript
// Register
const response = await fetch('http://localhost:3000/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ name, email, password })
});

// Login
const response = await fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ email, password })
});
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection failed | Check MONGO_URI and ensure MongoDB is running |
| Token undefined | Ensure JWT_SECRET is set in .env |
| CORS errors | Add CORS middleware for frontend origin |
| Port already in use | Change PORT in .env or kill process on that port |
| Module not found | Run `npm install` to install dependencies |

## Future Enhancements

- [ ] Refresh token mechanism
- [ ] Email verification for registration
- [ ] Forgot password functionality
- [ ] User profile routes
- [ ] Rate limiting middleware
- [ ] Input validation middleware
- [ ] Request logging
- [ ] Database indexes for performance

## License

ISC

## Contributing

Feel free to fork, modify, and improve this authentication system for your projects.

## Support

For issues and questions, please check the main project repository or create an issue in the GitHub repository.
