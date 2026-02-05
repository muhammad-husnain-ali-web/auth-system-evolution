# Auth Integration - React Version

A modern React authentication system with user registration, login, session management, and protected dashboard access. This version showcases best practices for building authentication systems with React, React Router, and Context API.

## Features

- **User Registration System** - Sign up with name, email, and password
- **User Login System** - Secure login with form validation and error handling
- **Context API State Management** - Global authentication state using React Context
- **Protected Routes** - Dashboard accessible only to authenticated users with PrivateRoute component
- **Public Routes** - Login and registration pages restricted to unauthenticated users with PublicRoute component
- **Session Management** - Persistent user sessions using localStorage
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **Modern UI** - Clean and intuitive user interface with Tailwind styling
- **SPA Navigation** - Smooth client-side routing with React Router v7

## Tech Stack

- **React 19.2** - UI library
- **React Router DOM 7.13** - Client-side routing
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **ESLint 9.39** - Code linting

## Project Structure

```
react/
├── src/
│   ├── context/
│   │   └── AuthContext.js         # Authentication context provider
│   ├── pages/
│   │   ├── Register.jsx           # User registration page
│   │   ├── Login.jsx              # User login page
│   │   └── Dashboard.jsx          # Protected dashboard page
│   ├── privateRoute/
│   │   └── PrivateRoute.jsx       # Route guard for authenticated users
│   ├── publicRoute/
│   │   └── PrivateRoute.jsx       # Route guard for public access
│   ├── assets/                    # Static assets folder
│   ├── App.jsx                    # Main app component with routing
│   ├── App.css                    # Component-specific styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── public/                        # Public static files
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML template
└── README.md                      # This file
```

## File Descriptions

### Context
#### AuthContext.js
Global authentication context that:
- Stores the current user state
- Provides user state and setter function to all components
- Allows components to access authentication status without prop drilling

### Pages

#### Register.jsx
User registration page with:
- Form inputs for name, email, and password
- Client-side form validation
- User data storage in localStorage under 'users' key
- Success alerts and form reset after registration
- Link to navigate to login page
- Responsive design with Tailwind CSS

#### Login.jsx
Authentication page that:
- Validates user credentials against registered users
- Stores authenticated user state in localStorage under 'user' key
- Updates global AuthContext on successful login
- Displays error alerts for invalid credentials
- Provides navigation to registration page
- Form reset after successful login

#### Dashboard.jsx
Protected dashboard page that:
- Shows authenticated user information
- Only accessible to logged-in users (protected by PrivateRoute)
- Provides logout functionality
- Clears user session on logout

### Route Guards

#### PrivateRoute.jsx (privateRoute/)
Protects routes from unauthenticated access:
- Checks if user is authenticated
- Redirects to login if user is not authenticated
- Allows access to dashboard for authenticated users

#### PrivateRoute.jsx (publicRoute/)
Restricts routes to unauthenticated users:
- Checks if user is not authenticated
- Redirects authenticated users to dashboard
- Allows register/login pages for unauthenticated users only

### App.jsx
Main application component that:
- Sets up React Router with protected and public routes
- Configures AuthContext provider
- Manages initial authentication state from localStorage
- Defines application routes:
  - `/` - Registration (public route)
  - `/login` - Login (public route)
  - `/dashboard` - Dashboard (private route)

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Clone the Repository

```bash
# Using Git
git clone git clone https://github.com/muhammad-husnain-ali-web/auth-system-evolution.git

# Navigate to react folder
cd auth-integration-evolation/react
```

### Install Dependencies

```bash
npm install
```

## Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)

### Build for Production

Build the application for production:

```bash
npm run build
```

Output will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## User Workflow

### 1. Register
- Navigate to the registration page (home `/`)
- Enter your name, email, and password
- Click "Register"
- Success alert confirms registration
- User data is stored locally

### 2. Login
- Navigate to the login page (`/login`)
- Enter your registered email and password
- Click "Login"
- On success, redirected to the dashboard
- Your session is saved locally

### 3. Access Dashboard
- After successful login, view the protected dashboard
- Your user information is displayed
- Session persists across page refreshes

### 4. Logout
- Click the logout button on the dashboard
- Session is cleared
- Redirected to the login page
- Must re-authenticate to access dashboard

## Key Concepts Demonstrated

### Context API
Global state management without prop drilling:
```jsx
const { user, setUser } = useContext(AuthContext);
```

### Protected Routes
Components that check authentication before rendering:
```jsx
<PrivateRoute>
  <Dashboard />
</PrivateRoute>
```

### Form State Management
React hooks for managing form inputs:
```jsx
const [form, setForm] = useState({
  email: '',
  password: ''
});
```

### LocalStorage Integration
Persistent authentication state:
```jsx
localStorage.setItem('user', JSON.stringify(userData));
const user = JSON.parse(localStorage.getItem('user'));
```

### React Router v7
Client-side routing and navigation:
```jsx
const router = createBrowserRouter([...]);
<RouterProvider router={router} />
```

## Data Structure

### Users Storage
All registered users stored under `users` key in localStorage:
```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
]
```

### User Session
Active user stored under `user` key in localStorage:
```
true (indicates user is authenticated)
```

## Styling

The project uses **Tailwind CSS** for styling with utility classes:
- Responsive design using Tailwind breakpoints
- Focus states and hover effects for better UX
- Consistent color scheme using Tailwind colors
- Flexbox layouts for responsive forms and pages

## Security Considerations

⚠️ **Note**: This is an educational project. For production applications:

1. **Never store passwords in localStorage** - Passwords should be hashed and only stored on a server
2. **Use JWT tokens** - Implement proper token-based authentication instead of boolean flags
3. **HTTPS only** - Always use HTTPS for authentication flows
4. **Server-side validation** - All authentication should be validated on the backend
5. **Secure password policies** - Implement password strength requirements
6. **Two-factor authentication** - Consider adding 2FA for enhanced security
7. **Environment variables** - Never hardcode API endpoints or secrets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Comparison with Vanilla Version

| Feature | React | Vanilla |
|---------|-------|---------|
| State Management | Context API | Plain JavaScript |
| Routing | React Router v7 | Manual redirects |
| Build Tool | Vite | None |
| Styling | Tailwind CSS | Custom CSS |
| Component Structure | React Components | HTML files |
| Developer Experience | Hot Module Replacement | Manual refresh |
| Code Organization | Modular | Single files |

## Future Enhancements

- [ ] Add form validation messages
- [ ] Implement password reset functionality
- [ ] Add user profile page
- [ ] Integrate with backend API
- [ ] Add JWT token authentication
- [ ] Implement refresh token logic
- [ ] Add email verification
- [ ] User role-based access control
- [ ] Add logout timeout
- [ ] Implement password strength indicator

## Troubleshooting

### Issue: Users not persisting after refresh
**Solution**: Check that localStorage is enabled in your browser and the 'users' data is being stored correctly.

### Issue: Can't login after registration
**Solution**: Ensure the email and password exactly match what was registered. Browser console will show validation errors.

### Issue: Dashboard shows 404
**Solution**: Make sure you're authenticated and the PrivateRoute component is properly protecting the route.

### Issue: Vite dev server not starting
**Solution**: Run `npm install` again and ensure all dependencies are properly installed.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Context API Guide](https://react.dev/reference/react/useContext)

---

**Part of the Auth Integration Evolution Series**

This React version demonstrates modern React patterns for building authentication systems. Compare with the vanilla JavaScript implementation to see how frameworks simplify code organization and state management.
