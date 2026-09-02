## Context

Siehe proposal.md – Why. Die Referenzdokumente sind bereits auf „Oberhusers" aktualisiert; der Code hinkt hinterher. Astro `output: 'static'`, Tailwind v4, Design-Tokens in `src/config/brand.ts` + `src/styles/theme.css`, eigener Icon-Satz in `src/components/Icon.astro` (Strichmotiv, 1.75px). Routen-Slugs bleiben unverändert. Bewusst **nicht** geändert: npm-Package-Name, Domain, E-Mail (noch nicht bestätigt).

## Goals / Non-Goals

**Goals:**
- Sichtbaren Hofnamen überall im Code auf „Oberhusers" stellen.
- Betriebszweigegemeinschaft entfernen und Fütterungszyklus korrekt darstellen.
- Neue Design-Features aus `DESIGN_SYSTEM.md` umsetzen: Partnerschaften-Sektion, Sub-Branding-Maskottchen, Typo-Hero, korrigierte TrustBar.
- Maskottchen-Vektoren animierbar aufbauen.

**Non-Goals:**
- Keine Änderung von Routen-/Slug-Pfaden.
- Kein Logo-Datei-Import (Logo kommt später; bis dahin bleiben die neuen Icons als Wordmark-/Icon-Stelle).
- Keine Änderung von `package.json`-Name, Domain, E-Mail.
- Keine Implementierung der eigentlichen Scroll-/Hover-Animationen (nur animierbarer Aufbau + reduced-motion-Behandlung).

## Decisions

**D1 – Branding über die zentrale Config leiten, kleine Reste manuell**
`brand.name` und `client.name` auf `'Oberhusers'` setzen; Header/Footer/BaseLayout/Meta lesen diese bereits dynamisch → ändern sich automatisch. Manuelle Stellen (Default-Props wie `Hero.astro` `heading = 'Chinderhof'`, Statusbeschreibungen in Komponenten, `index.astro`-Hero-Description, Umlagerungs-Texte, Spicker-Titel) gezielt anpassen. Kommentare ("Chinderhof"-Erwähnung in `images.ts`, `content.config.ts`, `theme.css`) mit-aktualisieren, damit keine veralteten Referenzen bleiben.

**D2 – `package.json`/Domain/Email bewusst auslassen**
Da Domain/Email nicht bestätigt sind, bleiben `brand.url`, `client.domain`, `client.email` und der npm-Name Chinderhof-basiert. Diese Entscheidung wird als offene Frage im `design.md`/`proposal.md` festgehalten, aber **nicht** willkürlich geändert.

**D3 – Neue Maskottchen-Icons in `Icon.astro` als rein pfadbasierte Strichmotive**
Neue benannte Einträge `dog` (Berner Sennenhund), `clover` (Kleeblatt), `potato` (Kartoffel) im bestehenden `icons`-Objekt ergänzen; gleicher Stil (einzeln adressierbare Pfade → CSS/JS-Animation möglich, `aria-hidden`). Bestehende `chicken`, `cow`, `wheat` bleiben für die Routen-Zuordnung.

**D4 – Sub-Branding pro Route via neue kleine Komponente**
Eine `Mascot.astro`-Komponente (oder direkte Icon-Nutzung) rendert je Route das zugewiesene Maskottchen (Mapping: id → icon) konsistent in Header/Greeting und auf der jeweiligen Seite. Mapping zentral in einer Konstante (z. B. in `brand.ts` oder einer neuen `src/config/mascots.ts`), damit es wartbar ist und Route → Maskottchen einheitlich bleibt.

**D5 – Typo-Hero umbauen statt Neubau**
`Hero.astro` wird so angepasst, dass die grosse Fraunces-Headline auf hellem Grund im Vordergrund steht; das Bild wird zu einer optionalen, kleineren Bildkarte (nicht Vollbild-Overlay). Hier für den Auth-Code in `index.astro` die gewünschten Props setzen (helger Grund, Doodle-Akzent). Die `Hero.astro`-Default-Props entsprechend neu definieren.

**D6 – Partnerschaften als eigene Komponente `Partnerschaften.astro`**
Neuer Abschnitt mit Konstante der 4 Partner (Name, Kurzbeschreibung, URL); externer Links mit `target="_blank" rel="noopener noreferrer"`. In `index.astro` zwischen Angebots-Karten und Über-uns einfügen (gemäss README-Reihenfolge).

**D7 – TrustBar mittels Props aus `index.astro`/Default anpassen**
Die TrustBar-Signale auf die korrekten Aussagen stellen (z. B. „Weidegang im Sommer", „Gras & Heu – echter Emmentaler", „Milch für Emmentaler AOP", „Freilandeier vom Hof"), je mit passendem Icon. Default-Werte in `TrustBar.astro` und Props in `index.astro` synchron halten.

## Risks / Trade-offs

- [Domain/Email/Präziser-Text könnten später doch umbenannt werden] → bewusst ausgelassen; als offene Frage dokumentiert, kein Risiko die sichtbare Marke.
- [Inhaltliche Aussagen (Fütterungszyklus) an mehreren Stellen (Milchseite, Über-uns, TrustBar, Home) könnten divergieren] → einheitliche Formulierungen verwenden, in den Tasks explizit geprüft.
- [Neue SVG-Pfade wirken evtl. nicht „perfekt" dem Logo-Stil gemäss] → bleibt als Zusatz-Design-Aufgabe offen, wenn die Logodatei geliefert wird; vorerst klar als Strich-Icon im Design-System-Stil.

## Open Questions

- Keine blockierenden; das Logo als Datei ist noch ausstehend und wird später in einer eigenen Änderung geliefert (macht die aktuellen Icons nicht obsolet, nur ersetzbar).
