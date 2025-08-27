document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const scrollUpBtn = document.getElementById('scrollUpBtn');
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Toggle dark mode
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️';
    } else {
      darkModeToggle.textContent = '🌙';
    }
  });

  // Show/hide scroll up button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollUpBtn.style.display = 'block';
    } else {
      scrollUpBtn.style.display = 'none';
    }
  });

  // Scroll smoothly to top when button clicked
  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form submit handling
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation done by required attribute in HTML

    formMessage.style.color = 'green';
    formMessage.textContent = 'Terima kasih, pesan Anda telah terkirim!';

    contactForm.reset();

    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  });
});
