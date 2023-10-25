// // Function to update the subtotal and grand total
// function updateTotals() {
//     const productData = document.querySelectorAll('.product-data');
//     let subtotal = 0;
  
//     productData.forEach(data => {
//       const quantity = parseInt(data.querySelector('.product-quantity').value);
//       const price = parseFloat(data.querySelector('.product-price').textContent.replace('Rs ', '').replace('/-', '').replace(',', ''));
//       const productSubtotal = quantity * price;
//       data.querySelector('.product-subtotal').textContent = `Rs ${productSubtotal.toFixed(2)}/-`;
//       subtotal += productSubtotal;
//     });
  
//     // Update the Subtotal and Grand Total
//     const taxes = 0.1 * subtotal; // Assuming a 10% tax
//     const shipping = 20; // Shipping cost
//     const grandTotal = subtotal + taxes + shipping;
  
//     document.getElementById('subtotal').textContent = `Rs ${subtotal.toFixed(2)}/-`;
//     document.getElementById('taxes').textContent = `Rs ${taxes.toFixed(2)}`;
//     document.getElementById('shipping').textContent = `Rs ${shipping}`;
//     document.getElementById('grand-total').textContent = `Rs ${grandTotal.toFixed(2)}`;
//   }
  
//   // Add event listeners for quantity change
//   const quantitySelects = document.querySelectorAll('.product-quantity');
//   quantitySelects.forEach(select => {
//     select.addEventListener('change', updateTotals);
//   });
  
//   // Initial calculation
//   updateTotals();
  

  const openPageInput = document.getElementById('openPageInput');

  openPageInput.addEventListener('click', function () {
      // Redirect to the XYZ page when the input field is clicked
      window.location.href = 'payment.html';
  });
  