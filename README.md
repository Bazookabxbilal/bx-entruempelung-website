# BX Entrümpelung – Website

Produktionsnahe, responsive statische Website für BX Entrümpelung in Frankfurt am Main. Die Seite ist für schnelle Kontaktanfragen per WhatsApp und E-Mail, lokale Suchmaschinenoptimierung und GitHub Pages ausgelegt.

## Dateistruktur

```text
.
├── index.html          # Startseite
├── rechtliches.html    # Impressum und Datenschutz
├── styles.css          # Gesamtes responsives Design
├── app.js              # Menü, Formular, Galerien, Karte
├── robots.txt
├── sitemap.xml
└── assets/
    └── images/         # Logo, Hero, Referenzbilder, Favicon
```

## Lokale Vorschau

Im Projektordner einen kleinen lokalen Server starten:

```bash
python3 -m http.server 8000
```

Danach `http://localhost:8000` öffnen. Die Dateien nicht nur per Doppelklick öffnen, da ein lokaler Server das Verhalten auf GitHub Pages besser abbildet.

## GitHub Pages veröffentlichen

1. Dateien in das Repository `bx-entruempelung-website` übertragen.
2. Unter **Settings → Pages** als Quelle **Deploy from a branch** wählen.
3. Branch `main` und Ordner `/ (root)` auswählen.
4. Nach dem Deployment ist die Website über GitHub Pages und nach korrekter DNS-Konfiguration unter `https://bx-entruempelung.de/` erreichbar.

Es sind keine Build-Schritte und keine Abhängigkeiten nötig.

## Bilder ersetzen

Folgende optimierte WebP-Dateien unter `assets/images/` ablegen:

- `logo-bx-entruempelung.webp` – Firmenlogo mit transparentem Hintergrund; ausreichend Innenabstand lassen
- `hero.webp` – hochwertiges Querformat, empfohlen etwa 1920 × 1200 px
- `before-1.webp`, `before-2.webp`, `before-3.webp` – Vorher-Aufnahmen
- `after-1.webp`, `after-2.webp`, `after-3.webp` – Nachher-Aufnahmen
- Optional: `favicon.png` – ein späteres quadratisches Favicon, z. B. 512 × 512 px. Bis dahin wird das Firmenlogo verwendet.

Logo und Referenzbilder besitzen Fallbacks: Solange Dateien fehlen, bleibt das Layout intakt. Vorher-/Nachher-Aufnahmen idealerweise im gleichen Seitenverhältnis (16:10) exportieren. Dateinamen exakt beibehalten, dann ist keine Änderung am HTML nötig.

## Eigene Domain

1. Die Datei `CNAME` enthält bereits `bx-entruempelung.de`; GitHub Pages übernimmt diesen Domainnamen beim Deployment.
2. Beim Domainanbieter die von GitHub dokumentierten DNS-Einträge setzen.
3. Nach erfolgreicher Prüfung **Enforce HTTPS** aktivieren.
4. Canonical-URL, Open-Graph-URL, JSON-LD, `robots.txt` und `sitemap.xml` sind bereits auf `bx-entruempelung.de` eingestellt.

## Datenschutz-Hinweis

Google Maps wird erst nach einem bewussten Klick geladen. Das Anfrageformular speichert oder versendet selbst keine Daten; es öffnet WhatsApp beziehungsweise das lokale E-Mail-Programm. Vor Veröffentlichung sollte die Datenschutzerklärung bei Bedarf rechtlich geprüft werden.
