const numElement = document.querySelector('.num');

// Get the plus and minus elements
const plusElement = document.querySelector('.plus');
const minusElement = document.querySelector('.minus');

// Add click event listeners to the plus and minus elements
plusElement.addEventListener('click', () => {
    // Increase the number when the plus is clicked
    numElement.textContent = String(parseInt(numElement.textContent) + 1).padStart(2, '0');
});

minusElement.addEventListener('click', () => {
    // Decrease the number when the minus is clicked, but not below 01
    numElement.textContent = String(Math.max(parseInt(numElement.textContent) - 1, 1)).padStart(2, '0');
});