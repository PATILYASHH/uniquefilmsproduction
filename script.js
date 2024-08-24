// Preloader functionality
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 2000); // Adjust timing if needed
  });
  
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
