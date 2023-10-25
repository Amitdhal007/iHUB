const paymentMethod = document.getElementById('paymentMethod');
const cardDetails = document.getElementById('cardDetails');
const upiDetails = document.getElementById('upiDetails');
const proceedButton = document.getElementById('proceedButton');

proceedButton.addEventListener('click', function () {
    const selectedPaymentMethod = paymentMethod.value;
    if (selectedPaymentMethod === 'card') {
        cardDetails.style.display = 'block';
        upiDetails.style.display = 'none';
    } else if (selectedPaymentMethod === 'upi') {
        cardDetails.style.display = 'none';
        upiDetails.style.display = 'block';
    }
});