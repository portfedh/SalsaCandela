// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const customNavMenu = document.getElementById('customNavMenu');

  if (hamburgerBtn && customNavMenu) {
    hamburgerBtn.addEventListener('click', function() {
      hamburgerBtn.classList.toggle('active');
      customNavMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = customNavMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        customNavMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburgerBtn.contains(event.target) && !customNavMenu.contains(event.target)) {
        hamburgerBtn.classList.remove('active');
        customNavMenu.classList.remove('active');
      }
    });
  }
});
