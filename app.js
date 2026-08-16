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

  const getLeadData = () => {
    const name = document.getElementById('lead-name')?.value.trim() || '-';
    const place = document.getElementById('lead-location')?.value.trim() || '-';
    const floor = document.getElementById('lead-floor')?.value.trim() || '-';
    const lift = document.getElementById('lead-lift')?.value || '-';
    const parking = document.getElementById('lead-parking')?.value || '-';
    const type = document.getElementById('lead-type')?.value || '-';
    const message = document.getElementById('lead-message')?.value.trim() || '-';
    return { name, place, floor, lift, parking, type, message };
  };

  const buildWhatsAppText = ({ name, place, floor, lift, parking, type, message }) => [
    'Hallo liebes Team von BX Entrümpelung,',
    '',
    'ich würde mir gern ein unverbindliches Angebot einholen.',
    '',
    `Name: ${name}`,
    `Ort / Stadtteil: ${place}`,
    `Stockwerk: ${floor}`,
    `Aufzug: ${lift}`,
    `Parkmöglichkeit: ${parking}`,
    `Objekt: ${type}`,
    `Kurze Beschreibung: ${message}`,
    '',
    'Wenn vorhanden, sende ich Ihnen gern zusätzlich Fotos zu.'
  ].join('\n');

  const buildEmailBody = ({ name, place, floor, lift, parking, type, message }) => [
    'Hallo liebes Team von BX Entrümpelung,',
    '',
    'ich würde mir gern ein unverbindliches Angebot einholen.',
    '',
    `Name: ${name}`,
    `Ort / Stadtteil: ${place}`,
    `Stockwerk: ${floor}`,
    `Aufzug: ${lift}`,
    `Parkmöglichkeit: ${parking}`,
    `Objekt: ${type}`,
    `Kurze Beschreibung: ${message}`,
    '',
    'Wenn vorhanden, kann ich Ihnen zusätzlich Fotos zusenden.',
    '',
    'Mit freundlichen Grüßen',
    name !== '-' ? name : ''
  ].join('\n');

  const waButton = document.getElementById('send-whatsapp');
  if (waButton) {
    waButton.addEventListener('click', () => {
      const text = buildWhatsAppText(getLeadData());
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_form_whatsapp', page_path: window.location.pathname });
      window.open(`https://wa.me/4915565783662?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  const mailButton = document.getElementById('send-email');
  if (mailButton) {
    mailButton.addEventListener('click', () => {
      const subject = 'Anfrage unverbindliches Angebot – BX Entrümpelung';
      const body = buildEmailBody(getLeadData());
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_form_email', page_path: window.location.pathname });
      window.location.href = `mailto:bx.entrumpelung@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
