window.onload = function () {
  // Get toggle icon elements and detail boxes
  const toggleButtons = document.querySelectorAll('.fa-caret-down');
  const detailBoxes = document.querySelectorAll('.order-detailet');

  // Hide all detail boxes by default
  detailBoxes.forEach(box => {
    box.style.display = 'none';
  });

  // Add click event listeners to each toggle icon
  toggleButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const detailBox = detailBoxes[index];
      const isHidden = detailBox.style.display === 'none';
      detailBox.style.display = isHidden ? 'block' : 'none';

      // Optional: Rotate icon or change it visually when toggled
      btn.classList.toggle('rotated'); // You can define .rotated in CSS if needed
    });
  });
};
