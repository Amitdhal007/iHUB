document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Perform validation checks
        const username = document.getElementById("username").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check if username is empty
        if (username.trim() === "") {
            alert("Username cannot be empty");
            return;
        }

        // Check if phone number is empty
        if (phoneNumber.trim() === "") {
            alert("Phone number cannot be empty");
            return;
        }

        // Check if email is empty and is a valid email address
        if (email.trim() === "") {
            alert("Email cannot be empty");
            return;
        } else if (!isValidEmail(email)) {
            alert("Invalid email address");
            return;
        }

        // Check if password is empty and meets a minimum length requirement
        if (password.trim() === "") {
            alert("Password cannot be empty");
            return;
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // If all validation checks pass, you can submit the form
        form.submit();
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }
});