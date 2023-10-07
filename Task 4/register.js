// register.js
const registrationForm = document.getElementById('registration-form');
const registrationMessage = document.getElementById('registration-message');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // You should hash the password and send it to the server for storage
    // For simplicity, we'll just display the hashed password here
    const hashedPassword = hashPassword(newPassword);

    // Simulated registration success
    setTimeout(() => {
        registrationMessage.textContent = 'Registration successful!';
    }, 1000);
});

// Simulated password hashing function (replace with a real hashing library)
function hashPassword(password) {
    // In a real application, you should use a secure hashing algorithm (e.g., bcrypt)
    // For simplicity, we'll just return the password itself
    return password;
}
