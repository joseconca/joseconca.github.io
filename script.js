fetch('proyectos.json')
  .then(response => {
    if(!response.ok) throw new Error('HTTP error ' + response.status);
    return response.json();
  })
  .then(projects => {
    const tabsContainer = document.getElementById('tabs');
    const projectContainer = document.getElementById('project-container');

    projects.forEach((proj, index) => {
      const btn = document.createElement('button');
      btn.className = 'tab-button';
      if(index === 0) btn.classList.add('active');
      btn.textContent = proj.title;
      btn.dataset.tab = proj.id;
      tabsContainer.appendChild(btn);

      const div = document.createElement('div');
      div.id = proj.id;
      div.className = 'project-content';
      if(index !== 0) div.classList.add('hidden');

      //si tiene imagen o video
      let mediaHtml = '';
      if (proj.image) {
        const ext = proj.image.split('.').pop().toLowerCase();
        if (ext === 'mp4') {
          mediaHtml = `<video controls src="${proj.image}" style="max-width:100%;display:block;margin:10px 0;"></video>`;
        } else {
          mediaHtml = `<img src="${proj.image}" alt="Captura ${proj.title}" style="max-width:100%;display:block;margin:10px 0;">`;
        }
      }
      //si tiene página en github pages
      let ghpages = '';
      if (proj.link){
        ghpages = `<a class = "ver-btn" href="${proj.link}" target="_blank">Enlace directo</a>`;
      }

      div.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>
        
        <p><strong>Tecnologías:</strong> ${proj.technologies.join(', ')}</p>
        <p><a class="ver-btn" href="${proj.repo}" target="_blank">Ver proyecto en GitHub</a> ${ghpages}</p>
        ${mediaHtml} 
      `;
      projectContainer.appendChild(div);
    });

    tabsContainer.addEventListener('click', e => {
      if(e.target.classList.contains('tab-button')){
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const selected = e.target.dataset.tab;
        document.querySelectorAll('.project-content').forEach(pc => {
          pc.classList.toggle('hidden', pc.id !== selected);
        });
      }
    });
  })
  .catch(err => {
    console.error('Error cargando proyectos:', err);
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '<p>No se pudieron cargar los proyectos. Ver más información en <a href="https://github.com/joseconca" target="_blank">github.com/joseconca</a></p>';
  });