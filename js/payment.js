window.onload = () => {
  const toggleButton = document.getElementById('showBtn');
  const detailBox = document.getElementById('detailetBox');

  // Hide the detail box initially
  detailBox.style.display = 'none';

  toggleButton.addEventListener('click', () => {
    const isHidden = detailBox.style.display === 'none';
    detailBox.style.display = isHidden ? 'block' : 'none';

    // Optional: Toggle icon rotation or state class
    toggleButton.classList.toggle('rotated'); // Add a CSS class for visual effect if needed
  });
};
