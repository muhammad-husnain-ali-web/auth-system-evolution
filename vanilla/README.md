# Auth Integration - Vanilla Version

A vanilla JavaScript authentication system with user login, session management, and protected dashboard access.

## Features

- **User Login System** - Secure login authentication with form validation
- **Session Management** - Persistent user sessions using localStorage
- **Protected Routes** - Dashboard accessible only to authenticated users
- **Responsive Design** - Works on desktop and mobile devices
- **Modern UI** - Clean and intuitive user interface
- **Auto-logout** - Session expiration handling

## Project Structure

```
vanilla/
├── index.html          # Home page (landing page)
├── login.html          # User login page
├── dashborad.html      # Protected dashboard page
├── script.js           # Core authentication logic
├── styles.css          # Global styling
└── README.md           # This file
```

## File Descriptions

### index.html
The landing/home page of the application. Displays welcome message and navigation links to login or dashboard.

### login.html
Authentication form where users can:
- Enter their credentials (username/email and password)
- Submit the form to authenticate
- Redirects to dashboard on successful login
- Displays error messages for failed attempts

### dashborad.html
Protected dashboard page that:
- Shows user information after successful login
- Displays authenticated content
- Provides logout functionality
- Redirects to login page if user is not authenticated

### script.js
Main JavaScript file containing:
- Authentication logic and validation
- Session/localStorage management
- Route protection and redirects
- Logout functionality
- User state management

### styles.css
Global CSS styling for:
- Layout and responsive design
- Form styling and validation states
- Button and interactive element styles
- Color scheme and typography

## Installation & Setup

### Clone the Repository

```bash
# Using Git
git clone [https://github.com/yourusername/auth-integration-evolation.git](https://github.com/muhammad-husnain-ali-web/auth-system-evolution.git)

# Navigate to vanilla folder
cd auth-integration-evolation/vanilla
```


## Usage

### For Users

1. **Visit the Login Page**
   - Click "Login" on the homepage
   - Enter your credentials
   - Click "Sign In"

2. **Access Dashboard**
   - After successful login, you're redirected to the dashboard
   - Your session is saved locally

3. **Logout**
   - Click the logout button on the dashboard
   - Your session is cleared

### For Developers

**Checking Authentication Status:**
```javascript
// Check if user is logged in
if (localStorage.getItem('user')) {
  // User is authenticated
}
```

**Storing User Data:**
```javascript
// Save user session
localStorage.setItem('user', JSON.stringify({
  username: 'user@example.com',
  loginTime: new Date().getTime()
}));
```

**Clearing Session:**
```javascript
// Logout user
localStorage.removeItem('user');
```

## Authentication Flow

1. User visits `/login.html`
2. Enters credentials and submits form
3. Form validation occurs (client-side)
4. On success:
   - User data stored in localStorage
   - Redirected to dashboard
5. Dashboard checks for active session
6. If no session, user redirected to login
7. User can logout, clearing session data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Security Notes

⚠️ **This is a frontend-only authentication demo!**

For production use:
- Implement backend API for authentication
- Use secure password hashing
- Use HTTP-only cookies for sessions
- Implement proper CSRF protection
- Add rate limiting on login attempts
- Use HTTPS for all communications
- Validate all input server-side

## License

MIT License - Feel free to use this project for learning and development.

---

**Note:** This vanilla version uses no frameworks or libraries - it's pure HTML, CSS, and JavaScript for educational purposes.
