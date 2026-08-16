(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.track-cta').forEach(el => {
    el.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: el.dataset.event || 'cta_click',
        page_path: window.location.pathname,
        cta_text: el.textContent.trim()
      });
    });
  });

  const form = document.getElementById('lead-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('lead-name').value.trim();
      const place = document.getElementById('lead-location').value.trim();
      const type = document.getElementById('lead-type').value;
      const message = document.getElementById('lead-message').value.trim();
      const lines = [
        'Hallo BX Entrümpelung, ich möchte eine kostenlose Einschätzung.',
        '',
        `Name: ${name || '-'}`,
        `Ort / Stadtteil: ${place || '-'}`,
        `Objekt: ${type}`,
        `Beschreibung: ${message || '-'}`,
        '',
        'Ich kann Ihnen anschließend Fotos schicken.'
      ];
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({event:'lead_form_whatsapp', page_path:window.location.pathname});
      window.open(`https://wa.me/4915565783662?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    });
  }
})();