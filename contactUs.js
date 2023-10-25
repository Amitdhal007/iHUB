function validateForm() {
    var nameInput = document.querySelector('input[type="text"]');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (nameInput.value === '') {
        alert('Please enter your name.');
        return false;
    }

    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (messageInput.value === '') {
        alert('Please enter your message.');
        return false;
    }

    return true;
}