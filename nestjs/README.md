# Next.js Authentication Integration

A modern authentication system built with **Next.js 16**, **React 19**, and **Tailwind CSS**. This project demonstrates user registration, login, and a protected dashboard using client-side context management and localStorage for data persistence.

## Features

- **User Registration** - Create new user accounts with name, email, and password
- **User Login** - Authenticate users with email and password verification
- **Protected Dashboard** - Access-controlled dashboard for logged-in users
- **Context API** - Global authentication state management
- **Persistent Storage** - Local storage for user data and authentication state
- **Responsive Design** - Tailwind CSS for modern UI
- **Next.js App Router** - Using latest Next.js 16 with app directory
- **React Server & Client Components** - Optimized with client components where needed

## Project Structure

```
nestjs/
├── app/
│   ├── layout.js                 # Root layout with AuthProvider
│   ├── page.js                   # Dashboard home page
│   ├── globals.css               # Global styles
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.js          # Login page component
│   │   └── register/
│   │       └── page.js          # Register page component
│   └── context/
│       ├── AuthContext.js        # Auth context creation
│       └── AuthProvider.js       # Auth context provider with state
├── public/                        # Static assets
├── package.json                   # Dependencies
├── next.config.mjs                # Next.js configuration
├── tailwind.config.js             # Tailwind CSS config
├── postcss.config.mjs             # PostCSS config
└── README.md                      # This file
```

## Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Package Manager**: npm
- **Build Tools**: Babel, ESLint

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd nestjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Usage

### Registration
1. Navigate to `/auth/register`
2. Enter your name, email, and password
3. Click "Register" to create an account
4. You'll be redirected to the login page

### Login
1. Navigate to `/auth/login`
2. Enter your email and password
3. Click "Login" to authenticate
4. You'll be redirected to the dashboard

### Dashboard
1. Once logged in, you'll be on the dashboard page (`/`)
2. View your user status and welcome message
3. Click "Logout" to clear your session

## Components

### AuthContext
- **Location**: `app/context/AuthContext.js`
- **Purpose**: Creates the React Context for authentication state
- **Exports**: `AuthContext` object

### AuthProvider
- **Location**: `app/context/AuthProvider.js`
- **Purpose**: Manages authentication state and provides it to the app
- **Features**:
  - Initializes user state from localStorage
  - Persists authentication status
  - Wraps entire application in Context.Provider

### Login Component
- **Location**: `app/auth/login/page.js`
- **Features**:
  - Email and password form
  - User validation against stored records
  - Cookie and localStorage synchronization
  - Redirect to dashboard on successful login

### Register Component
- **Location**: `app/auth/register/page.js`
- **Features**:
  - User registration form (name, email, password)
  - Data storage in localStorage
  - Redirect to login page after registration

### Dashboard Component
- **Location**: `app/page.js`
- **Features**:
  - Protected route (accessible when user is logged in)
  - User welcome message
  - Logout functionality

## Data Storage

### localStorage Structure

**Users Array**
```javascript
// Key: 'users'
[
  { name: "John Doe", email: "john@example.com", password: "password123" },
  { name: "Jane Smith", email: "jane@example.com", password: "password456" }
]
```

**Current User State**
```javascript
// Key: 'user'
true  // or false, represents authentication status
```

## How Authentication Works

1. **Registration**: 
   - User data is collected and stored in `localStorage['users']` array
   - No validation on duplicate emails in current implementation

2. **Login**:
   - Email and password are matched against records in `localStorage['users']`
   - On successful match, `localStorage['user']` is set to `true`
   - Authentication cookie is also set for additional security

3. **Session Persistence**:
   - `AuthProvider` checks `localStorage['user']` on mount
   - User state is restored automatically on page refresh

4. **Logout**:
   - `localStorage['user']` is set to `false`
   - User context is cleared
   - User is redirected to login page

## Styling

This project uses **Tailwind CSS 4** for styling with utility classes:

- **Colors**: Blue for primary actions, red for logout, gray for text
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Components**: Styled form inputs, buttons, and containers for clean UI

## Key Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `app/layout.js` | Root layout component |
| `app/context/AuthProvider.js` | Authentication state provider |
| `app/auth/login/page.js` | Login page |
| `app/auth/register/page.js` | Registration page |
| `next.config.mjs` | Next.js configuration |

## Configuration Notes

- **React Compiler**: Enabled in Next.js config for optimized rendering
- **Environment Variables**: `NEXT_PUBLIC_HOST` is used for internal navigation
- **Client Components**: Auth pages and dashboard use `'use client'` directive
- **App Router**: Project uses Next.js 16 app directory structure

## Security Considerations**Important**: This is a demonstration project. For production use:

1. **Replace localStorage** with secure server-side sessions
2. **Hash passwords** using bcrypt or similar
3. **Add HTTPS** for secure communication
4. **Implement CSRF protection** for forms
5. **Use environment variables** for sensitive data
6. **Add input validation** on both client and server
7. **Implement refresh tokens** for better session management
8. **Use httpOnly cookies** for session tokens

## Development Tips

- **Hot Reload**: Changes to files automatically reload the dev server
- **Debugging**: Use browser DevTools to inspect React components and localStorage
- **Context**: Check `AuthContext` value in React DevTools for state debugging
- **Styling**: Modify Tailwind classes directly in JSX for quick UI adjustments

## Future Enhancements

- Add form validation and error messages
- Implement password strength checking
- Add email verification
- Backend API integration
- Database integration (MongoDB, PostgreSQL, etc.)
- JWT token implementation
- Remember me functionality
- Password reset feature
- User profile management

## Troubleshooting

### Users not persisting after page refresh
- Check browser's localStorage settings
- Ensure cookies are enabled in browser
- Check browser console for errors

### Login/Register navigation not working
- Verify `NEXT_PUBLIC_HOST` environment variable is set
- Check that routes match the file structure
- Ensure `next dev` server is running

### Styling not appearing
- Clear Next.js cache: `rm -r .next`
- Rebuild: `npm run build`
- Check Tailwind config in `tailwind.config.js`

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [React Documentation](https://react.dev) - React fundamentals
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context) - State management

## Author

Created as part of the authentication series comparing different frameworks and approaches.
