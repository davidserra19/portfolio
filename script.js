/* ================= script.js ================= */

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// Basic form handler (no backend)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! (You need a backend or service like Formspree)');
});
