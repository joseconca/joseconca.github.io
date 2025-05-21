function copyEmail() {
    const emailElement = document.getElementById('email-text');
    if (!emailElement) return;
    const email = emailElement.textContent;
    navigator.clipboard.writeText(email)
      .then(() => alert('Email copiado al portapapeles'))
      .catch(err => console.error('Error al copiar email:', err));
  }
  
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? 'Modo Oscuro' : 'Modo Claro';
  });
  
  // Loading console animation
  let percent = 0;
  const percentSpan = document.getElementById('percent');
  setInterval(() => {
    percent = Math.min(percent + 1, 100);
    percentSpan.textContent = percent + '%';
  }, 500);