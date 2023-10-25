document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for now

        let isValid = true;

        // Validate username
        if (usernameInput.value.trim() === '') {
            alert('Username is required');
            return;
            // isValid = false;
        }

        // Validate phone number
        const phoneNumberPattern = /^[0-9]{10}$/;
        if (!phoneNumberPattern.test(phoneNumberInput.value.trim())) {
            alert('Invalid phone number');
            return;
            // isValid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Invalid email address');
            return;
            // isValid = false;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            alert('Password is required');
            return;
            // isValid = false;
        }

        // If all fields are valid, you can submit the form
        if (isValid) {
            form.submit();
        }
    });
});
