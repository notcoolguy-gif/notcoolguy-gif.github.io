// Function to toggle password visibility
function togglePassword(passwordId, button) {
    const passwordInput = document.getElementById(passwordId);
    const isPasswordVisible = passwordInput.type === 'text';
    
    // Toggle password visibility
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    
    // Update button text
    button.textContent = isPasswordVisible ? 'Show' : 'Hide';
}

// Listen for registration form submissions
document.querySelector('.register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const email = document.getElementById('reg-email').value;

    // Basic validation for empty fields
    if (!username || !password || !email) {
        alert('Please fill out all fields.');
        return;
    }

    // Save user data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Note: Store passwords securely in production!
    localStorage.setItem('email', email);

    alert('User registered successfully!');
    document.querySelector('.register-form').reset(); // Reset the form after submission
    
    // Redirect to the dashboard
    window.location.href = 'dashboard.html';
});

// Listen for login form submissions
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Basic validation for empty fields
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Retrieve stored user data
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if credentials match
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please create an account.');
    }
});

// Toggle between login and registration forms
document.querySelectorAll('.message a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link action
        
        // Toggle visibility of forms
        const loginForm = document.querySelector('.login-form');
        const registerForm = document.querySelector('.register-form');
        
        loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
        registerForm.style.display = registerForm.style.display === 'block' ? 'none' : 'block';
    });
});