# Chinderhof – Projektbeschreibung

> **Status:** Entwurf / im Aufbau. Hosting, Domain und konkrete Kontaktdaten sind noch nicht final definiert (mit Platzhaltern hinterlegt).

---

## 1. Vision

Der **Chinderhof** ist ein Familienbetrieb im Emmental (Gegend um **Langnau im Emmental**, Kanton Bern). Die Website soll den Hof als **sympathische, authentische und moderne Landwirtschaft** präsentieren – nahbar, ehrlich und mit **Schweizerdeutsch-Touch**. Sie ist das digitale Schaufenster des Hofs und macht das Angebot sichtbar:

- **Transparenz & Werte:** Wie wir Tiere halten (Laufstall, Weide, Heufütterung), was wir anbauen, wer hinter dem Betrieb steht.
- **Verkauf & Anmeldung:** Abo-Bestellungen (Freilandeier) und Anmeldungen (Kindernachmittage) mit einem kurzen, unkomplizierten Workflow.
- **Lokale Sichtbarkeit:** Starke lokale SEO, damit Familien und Abnehmer aus der Region den Hof finden.

Tonfall: **herzlich, bodenständig, modern**. Keine klassische Werbesprache – der Chinderhof spricht in Hochdeutsch mit regionalen Akzenten (z. B. „Hoschtert", „Loppigen" nur wo passend), wie die Emmentaler Familie, die er ist.

## 2. Zielgruppen

| Zielgruppe | Bedürfnis / Ziel |
|---|---|
| Lokale Privatkund:innen | Freilandeier-Abo, Abholung am Hof oder Lieferung |
| Familien / Eltern | Kindernachmittage, Kinderprogramm, Tagesausflug, Tiere erleben |
| B2B / Abnehmer | Milch & Emmentaler (Käserei-Abnehmer), Ackerbau-Erzeugnisse |

## 3. Seitenstruktur (Routes)

Statische Astro-Routen:

| Route | Seite | Zweck |
|---|---|---|
| `/` | Home | Überblick Hof, Angebote, Bilder, CTA |
| `/freilandeier` | Freilandeier | Abo-Angebot + Anmelde-Formular |
| `/milchproduktion` | Milchproduktion | Werte & Transparenz + B2B-Anfrage |
| `/kinderprogramm` | Kindernachmittage / Kinderprogramm | Angebot + Anmelde-Formular |
| `/ackerbau` | Ackerbau | Anbau, Produkte, Saisonalität |
| `/ueber-uns` | Über uns | Familie, Geschichte, Betrieb, Kleintiere, Lernende |
| `/kontakt` | Kontakt | Adresse, Telefon, E-Mail, Anfahrt, Kontaktformular |
| `/impressum` | Impressum | Rechtliches |
| `/datenschutz` | Datenschutz | DSG-konform (PostHog cookieless) |

Regeln:

- **Keine** eigene Blog-Sektion (Bootstrap-Vorlage mit Blog komplett entfernt).
- **Keine** separate Galerie-Seite – Fotos werden direkt in die Unterseiten eingebunden.
- Die vier Angebotsseiten werden **content-driven** aus einer Content-Collection (`angebote`) erzeugt, damit Texte/Preise ohne Code-Anpassung pflegbar sind.
- Finale Seitennamen/Slugs können noch angepasst werden.

## 4. Seiten-Inhalte (Kurz-Spec)

- **Home:** Hero-Bild, Willkommen mit Emmentaler-Charme, Highlight-Leiste (Weidehaltung, Heufütterung, Emmentaler, Freilandeier), 4 Angebots-Karten, Familien-Vorstellung, eingebundene Fotos, CTA „Eier-Abo bestellen" / „Kinderprogramm anmelden".
- **Freilandeier:** Haltung (Weide, überschaubares Hühnervolk), Abo-Modalitäten (Abholung am Hof oder Lieferung), **Anmelde-Formular** (§5).
- **Milchproduktion:** Laufstall, Weide im Sommer, reine Heufütterung im Winter, Emmentaler-Produktion, Betriebszweigegemeinschaft, Lernende. **B2B-Anfrageformular** (§5).
- **Kindernachmittage:** Zielgruppe/Alter, Inhalte, Treffpunkt, **Anmelde-Formular** (§5). Konkrete Details sind noch offen – die Seite ist so gebaut, dass Inhalte später einfach angepasst werden können.
- **Ackerbau:** Saatkartoffeln, Getreide, Silomais, Futterrüben; Wald & Hoschtert.
- **Über uns:** „Waschechte Emmentalerfamilie", Familie + Scheidegger-Betriebszweigegemeinschaft, Tiere (Lora, Elvira & Otto, Ziegen, Kaninchen), Lernende/Lehrstellen.
- **Kontakt:** Adresse (Hof, PLZ, Langnau im Emmental), Telefon, E-Mail, Anfahrt, einfaches Kontaktformular.

## 5. Anmelde- & Anfrage-Workflow (MVP)

Vier Formulare, alle über **PostHog (cookieless)** integriert:

1. **Eier-Abo:** Name, E-Mail, Telefon (optional), Ort/PLZ (für Lieferung), Lieferart (Abholung am Hof / Lieferung), gewünschte Menge & Rhythmus, Wunsch-Start, Nachricht.
2. **Kindernachmittag:** Erziehungsberechtigte (Name, E-Mail, Telefon), Kindername + Alter, Anzahl Kinder, gewünschter Nachmittag, Nachricht.
3. **B2B-Anfrage (Milch/Ackerbau):** Firmenname, Ansprechperson, E-Mail, Produkt-Interesse, Menge, Nachricht.
4. **Kontakt:** Name, E-Mail, Telefon (optional), Nachricht.

**Ablauf MVP:**
1. Das Formular wird clientseitig als strukturiertes Event an PostHog gesendet – die Website bleibt dadurch **vollständig statisch** (kein Server nötig).
2. Der PostHog-Workflow (Pipeline/Hog-Function) sendet eine **E-Mail an die Besitzerinnen** und trägt die Anfrage in eine **geteilte Liste** ein (MVP z. B. Google Sheets).
3. Die Besitzerinnen bestätigen die Anfrage manuell; die Interessent:in wird im finalen Ausbau automatisch informiert.

**Architektur-Hinweis (wichtig für Agenten):** Die Anfrage wird als **strukturiertes Event** mit sauberen Property-Namen gesendet (`type`, `name`, `email`, `lieferart`, …). So kann später – ohne Änderung am Formularcode – eine **automatisierte Bestätigungs-E-Mail**, eine **CRM-Anbindung** sowie Webshop / **automatisierte Rechnungsstellung** ergänzt werden.

**Konfiguration:** Der PostHog-Key wird über die Umgebungsvariable `PUBLIC_POSTHOG_KEY` gesetzt (plus optional `PUBLIC_POSTHOG_HOST`). Ohne Key läuft die Seite im „Demo-Modus" (Formular zeigt Erfolg, Log-Ausgabe) – für Build/Preview ohne Backend.

## 6. Technischer Stack

| Bereich | Vorgabe |
|---|---|
| Framework | **Astro (v6/v7, vorhanden)** – statischer Build (`output: 'static'`) |
| Styling | **Tailwind CSS v4** (Vite-Plugin, vorhanden) |
| Design-System | siehe **`DESIGN_SYSTEM.md`** (Werte gespiegelt in `src/config/brand.ts` + `src/styles/theme.css`) |
| Fonts | **Fraunces** (Headings, via Bunny Fonts, DSG-konform) + **Systemschrift** (Body, null Webload) |
| SEO | `@astrojs/sitemap`, `astro-robots-txt`, JSON-LD (Schema.org `LocalBusiness`/`Farm`), Open-Graph-Meta, Canonicals |
| Analytics | **PostHog – cookieless** konfiguriert (`persistence: 'memory'`, kein `localStorage`-Cookie), daher **kein Cookie-Banner** nötig (DSG-konform) |
| Bilder | Lokale Bilder unter `src/assets/images/{hero,about,gallery}/`, automatisch von Astro optimiert (WebP/AVIF, srcset) |
| Inhalte | Content-Collection `angebote` (`src/content/angebote/*.md`) mit Zod-Schema |
| Deployment | Statisch, **gehostet in der Schweiz** – Anbieter/Domain offen (Domaine `chinderhof.ch` existiert) |

## 7. Design & Marke

> Verbindliche Referenz: **`DESIGN_SYSTEM.md`** – Design-Grundlagen, Tokens, Farb-/Kontrastregeln, Komponenten-Styles und Freigabe-Checkliste für die Besitzerin.

- Logo & Fotos sind vorhanden (vom bestehenden Auftritt) – werden nachgeliefert/ersetzt. Aktuell dienen lokale Platzhalter-Fotos.
- Warme, almenwirtschaftliche Farbpalette (Tannengrün `#2F5D2A`, Heu-Gold `#D9A12B`, Terrakotta `#C2603C`, Rahm `#FAF4E8`) – definiert in `src/config/brand.ts` + `src/styles/theme.css`.
- Headlines in **Fraunces** (Bunny Fonts), Body in **Systemschrift**; organische Radien, weiche warme Schatten, Hügellinien-Sektionen, eigener Hof-Icon-Satz (`src/components/Icon.astro`), Schweizerdeutsch-Spicker (`Spicker.astro`), Doodle-Hervorhebungen; nur heller Modus.
- Mobile-First, schnelle Ladezeiten (Core Web Vitals), View-Transitions für sanfte Navigation.
- Schweizerdeutsch-Touch in Infotexten; Gesamttext Deutsch (Hochdeutsch).

## 8. SEO & Auffindbarkeit

Vorgeschlagene Fokus-Keywords (basierend auf Zielgruppen & Standort):

- Freilandeier: `Freilandeier Langnau`, `Eier Abo Emmental`, `Eier ab Hof` · `Eier Abo`
- Kinderprogramm: `Kindernachmittag Bauernhof`, `Kinderprogramm Emmental`, `Bauernhof Spazierziel Langnau`
- Milchproduktion: `Emmentaler Hof`, `Milchvieh Laufstall Heufütterung`, `Lehrstelle Landwirt Emmental`
- B2B: `Milch für Käserei`, `Saatkartoffeln Emmental`, `Betriebszweigegemeinschaft Emmental`

Technische Umsetzung: Strukturierte Daten (`LocalBusiness` mit Adresse), eine H1 pro Seite, saubere Überschriften-Hierarchie, beschreibende Metadaten, Alt-Texte, Sitemap, Robots.txt.

## 9. Rechtliches

- **Impressum** und **Datenschutzerklärung** (DSG Schweiz) als Seiten vorhanden; konkrete Angaben sind noch mit Platzhaltern hinterlegt.
- **Kein Cookie-Banner:** PostHog läuft **cookieless** (In-Memory-Persistence), Einwilligungs-Cookies werden nicht gesetzt.

## 10. Nicht-Ziele (Scope dieses Projekts)

- **Kein** Webshop / Online-Bezahlung.
- **Keine** automatisierte Rechnungsstellung.
- **Kein** Blog.
- **Keine** eigene Galerie-Seite.
- **Keine** Mitglieder-/Login-Funktionen; keine Chat-Features.

## 11. Zukunfts-Roadmap (nicht Teil dieses Builds)

- Webshop (eier-abo-basierte Produkte, Direktverkauf).
- Automatisierte Rechnungsstellung nach Bestätigung.
- CRM-Anbindung & automatisierte Bestätigungs-E-Mails.
- Abo-Verwaltung (Pausen, Mengenänderungen, Lieferrouten).

---
