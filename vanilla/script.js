
// Function to check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}
// On page load, check login status and redirect if necessary
window.onload = function() {
    const currentPage = window.location.pathname.split('/').pop();
    if (isLoggedIn() && (currentPage === 'index.html' || currentPage === 'login.html')) {
        window.location.href = 'dashborad.html';
    }
    if (!isLoggedIn() && currentPage === 'dashborad.html') {
        window.location.href = 'login.html';
    }};

// Handle registration form submission
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('UserEmail').value;
        const username = document.getElementById('UserName').value;
        const password = document.getElementById('UserPassword').value;
        console.log('Registered with:', { email, username, password });

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const isUSer = users.find(user => user.email === email);
        if (isUSer) {
            alert('User already exists with this email. Please login.');
            return;
        }
        users.push({ email, username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
    });
}


// Handle login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const email = document.getElementById('loginUserEmail').value;
        const password = document.getElementById('loginUserPassword').value;
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            alert('Invalid email or password. Please try again.');
            return;
        }
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'dashborad.html';
    });
}
// Handle logout
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        alert('Logged out successfully!');
        window.location.href = 'login.html';
    });
}