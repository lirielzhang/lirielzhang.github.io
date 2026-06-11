const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach((link) => {
  if (link.getAttribute('href') === current) link.classList.add('is-active');
});
