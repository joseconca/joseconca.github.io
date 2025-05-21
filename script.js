function copyEmail() {
    const emailElement = document.getElementById('email-text');
    if (!emailElement) return;
    const email = emailElement.textContent;
    navigator.clipboard.writeText(email)
      .then(() => alert('Email copiado al portapapeles'));
  }

  // Expandir items 
  document.querySelectorAll('.expandable .summary').forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.classList.toggle('open');
    });
  });


  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light');
    toggle.textContent = '🌘';
  }
  // Theme toggle
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '🌘' : '🌖';
  });
  


  // Loading console animation
  let percent1 = 0;
  const percentSpan1 = document.getElementById('percent1');
  setTimeout(() => {
    const interval = setInterval(() => {
      percent1 = Math.min(percent1 + 1, 100);
      percentSpan1.textContent = percent1 + '%';
      if (percent1 === 100) clearInterval(interval);
    }, 25); // Ajusta velocidad
  }, 7500); // Espera

  let percent = 0;
  const percentSpan = document.getElementById('percent2');
  setTimeout(() => {
    const interval = setInterval(() => {
      percent = Math.min(percent + 1, 100);
      percentSpan.textContent = percent + '%';
      if (percent === 99) clearInterval(interval);
    }, 100); // Ajusta velocidad
  }, 13000); // Espera

  setTimeout(() => {
    const check = document.getElementById('ready-check');
    check.classList.remove('hidden');
    check.classList.add('visible');
  }, 10100); // 2s después de "Web Dev Ready"