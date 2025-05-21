function copyEmail() {
    const emailElement = document.getElementById('email-text');
    if (!emailElement) return;
    const email = emailElement.textContent;
    navigator.clipboard.writeText(email)
      .then(() => alert('Email copiado al portapapeles'));
  }

  function copyTelf() {
    const telfElement = document.getElementById('telf-text');
    if (!telfElement) return;
    const telf = telfElement.textContent;
    navigator.clipboard.writeText(telf)
      .then(() => alert('Teléfono copiado al portapapeles'));
  }
  
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '🌘' : '🌖';
  });
  
  // Loading console animation
  let percent = 0;
  const percentSpan = document.getElementById('percent');
  setInterval(() => {
    percent = Math.min(percent + 1, 100);
    percentSpan.textContent = percent + '%';
  }, 500);