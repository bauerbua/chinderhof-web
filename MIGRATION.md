# Weiterleitung & Zusammenschluss (zwei Websites → chinderhof.ch)

Alte Domain per **301 (permanent)** auf `https://www.chinderhof.ch/` umleiten – nie per JavaScript.
301 übernehmen das Suchranking und funktionieren ohne JavaScript. Die „Umzug"-Botschaft steht
auf der neuen Seite (Banner `UmzugHinweis.astro` + Kapitel „Über uns"), nicht auf der alten.

## 1. Pfad-Mapping (bestehende Unterseiten eintragen)

| alte URL | neue URL |
|---|---|
| `/` und Unbekanntes | `/` |
| `/freilandeier` (alle Varianten) | `/freilandeier` |
| `/milch` usw. | `/milchproduktion` |
| `/kinder` usw. | `/kinderprogramm` |
| `/ueber-uns` | `/ueber-uns` |
| `/kontakt` | `/kontakt` |

## 2. 301 einrichten (je Hosting)

**Apache** (cyon, Infomaniak, Hostpoint …) – `.htaccess` im Webroot der ALTEN Domain:

```apache
Redirect 301 /freilandeier   https://www.chinderhof.ch/freilandeier
Redirect 301 /milch          https://www.chinderhof.ch/milchproduktion
Redirect 301 /ueber-uns      https://www.chinderhof.ch/ueber-uns
Redirect 301 /kontakt        https://www.chinderhof.ch/kontakt
RedirectMatch 301 ^/.*$      https://www.chinderhof.ch/
```

**Cloudflare:** Redirect Rule – wenn Hostname = alte Domain, dann
`https://www.chinderhof.ch${path}`, Status **301**.

**Netlify:** `netlify.toml` mit `[[redirects]]` von `https://alte-domain.ch/*` → `https://www.chinderhof.ch/:splat`, `status = 301`.
**Vercel:** `vercel.json` mit `"redirects"`, `"permanent": true`.

**Registrar-Parking** (Notbehelf, nur Root ohne Pfade): „Website-Weiterleitung" auf 301 stellen.

## 3. Texte einschalten

In `src/config/umzug.ts` Betriebsname + Standort eintragen und `aktiv: true` setzen
(Banner Home + Kapitel „Über uns"). Nach ~4–8 Wochen wieder auf `false`.

## 4. Google & Verzeichnisse (empfohlen)

- **Google-Business-Profil**: alten Betrieb auf neuen Namen/Standort **umziehen**, kein zweites Profil (Adresse, Kategorie, Fotos, Öffnungszeiten aktualisieren).
- **Backlinks** wichtiger Partner (Gemeinde, Vereine, Abnehmer) auf neue URL setzen – 301 erledigt den Rest.
- **Social Media**: Handles umbenennen oder im Profil auf die neue Seite verlinken.
- **E-Mail**: alte Adresse weiterleiten (mit Antwort-Hinweis „umgezogen").
- **Search Console**: alte Properties anlegen → **Adressänderung** (Change of Address) auf die neue Seite, neue Sitemap einreichen.

## 5. Prüfung nach Go-Live

- `curl -I https://alte-domain.ch/freilandeier` → muss `301` + `Location:` zur neuen URL liefern.
- Alte Domain **1–2 Jahre weiter verlängern** (Lesezeichen, Flyer, QR-Codes).
- Nach 2–4 Wochen: nur noch wenige Requests → altes Hosting kündigen (Domain behalten).