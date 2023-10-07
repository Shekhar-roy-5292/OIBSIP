// script.js
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can replace these with actual authentication logic
    if (username === 'user' && password === 'password') {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
