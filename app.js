(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const closeMenu = () => { nav?.classList.remove('open'); document.body.classList.remove('menu-open'); menuButton?.setAttribute('aria-expanded', 'false'); };
  menuButton?.addEventListener('click', () => { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); menuButton.setAttribute('aria-expanded', String(open)); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.querySelectorAll('.marquee-track').forEach(track => { track.insertAdjacentHTML('beforeend', track.innerHTML); Array.from(track.children).slice(track.children.length / 2).forEach(el => el.setAttribute('aria-hidden', 'true')); });

  document.querySelectorAll('.brand img').forEach(img => { const fail = () => img.closest('.brand')?.classList.add('image-missing'); img.addEventListener('error', fail); if (img.complete && !img.naturalWidth) fail(); });
  document.querySelectorAll('.gallery-track img').forEach(img => {
    const figure = img.closest('figure');
    const ok = () => { img.hidden = false; figure?.classList.add('loaded'); };
    const fail = () => { img.hidden = true; figure?.classList.remove('loaded'); };
    img.addEventListener('load', ok);
    img.addEventListener('error', fail);
    if (img.complete) img.naturalWidth ? ok() : fail();
  });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  document.querySelector('[data-map] .map-button')?.addEventListener('click', () => {
    const holder = document.querySelector('[data-map]');
    const frame = document.createElement('iframe');
    frame.title = 'Google Maps – Frankfurt am Main und Umgebung'; frame.loading = 'lazy'; frame.referrerPolicy = 'no-referrer-when-downgrade'; frame.allowFullscreen = true;
    frame.src = 'https://www.google.com/maps?q=Frankfurt%20am%20Main&z=9&output=embed'; holder.replaceChildren(frame);
  });

  const form = document.querySelector('#request-form');
  let action = 'whatsapp';
  form?.querySelectorAll('[data-submit]').forEach(button => button.addEventListener('click', () => { action = button.dataset.submit; }));
  form?.addEventListener('submit', event => {
    event.preventDefault(); if (!form.reportValidity()) return;
    const data = new FormData(form); const get = key => String(data.get(key) || '').trim();
    if (action === 'email') {
      const subject = 'Anfrage unverbindliches Angebot – BX Entrümpelung';
      const body = `Sehr geehrtes Team von BX Entrümpelung,\n\nich möchte gerne eine unverbindliche Einschätzung beziehungsweise ein Angebot für folgende Anfrage erhalten:\n\nName: ${get('name')}\nOrt / Stadtteil: ${get('location')}\nStockwerk: ${get('floor')}\nAufzug: ${get('elevator')}\nParkmöglichkeit: ${get('parking')}\nObjekt: ${get('object')}\nBeschreibung: ${get('description')}\n\nWenn erforderlich, kann ich Ihnen zusätzlich Fotos des Objekts zukommen lassen.\n\nMit freundlichen Grüßen\n${get('name')}`;
      window.location.href = `mailto:bx.entrumpelung@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      const message = `Hallo liebes Team von BX Entrümpelung,\n\nich würde mir gern ein unverbindliches Angebot einholen.\n\nName: ${get('name')}\nOrt / Stadtteil: ${get('location')}\nStockwerk: ${get('floor')}\nAufzug: ${get('elevator')}\nParkmöglichkeit: ${get('parking')}\nObjekt: ${get('object')}\nKurze Beschreibung: ${get('description')}\n\nWenn vorhanden, sende ich Ihnen gern zusätzlich Fotos zu.`;
      window.open(`https://wa.me/4915565783662?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    }
  });
  const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
})();
