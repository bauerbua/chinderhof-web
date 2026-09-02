## Why

Die Dokumentation (`README.md` und `DESIGN_SYSTEM.md`) wurde auf den Hofnamen **Oberhusers**, korrigierte Inhalte (aufgelöste Betriebszweigegemeinschaft, neuer Fütterungszyklus) und neue Design-Vorgaben (Typo-Hero, Sub-Branding-Maskottchen, Anti-KI-Look, Partnerschaften) aktualisiert. Der **Code** (`src/`) spiegelt diese Referenzen aber noch nicht: Er verwendet weiterhin „Chinderhof", enthält veraltete „Betriebszweigegemeinschaft"-Aussagen und implementiert die neuen Design-Elemente noch nicht. Damit Website und Referenzdokumente konsistent sind, muss dieser Zustand im Code nachgezogen werden.

## What Changes

**A. Branding & Inhaltskorrekturen im Code**
- Hof-/Markenname in sichtbaren Codestellen von „Chinderhof" zu „Oberhusers" umstellen (`brand.ts`, `client.ts`, `umzug.ts`-Texte, `Hero.astro`-Default, `About.astro`, `Spicker.astro`, `AngebotsGrid.astro`, `index.astro`, `AnmeldeFormular.astro`-Log, Kommentare in `images.ts`/`content.config.ts`/`theme.css`).
- **Nicht** geändert: npm-Package-Name, `brand.url`/`client.domain`/E-Mail sowie `package.json`-Keywords (Domain/Adresse noch nicht bestätigt; bleibt Chinderhof-basiert bis Klärung).
- **Betriebszweigegemeinschaft** aus Inhaltsstellen entfernen (`milchproduktion.md`, `ackerbau.md`, `ueber-uns.astro`, `About.astro`).
- **Fütterungszyklus** korrigieren: 9 Monate Gras/Heu → Emmentaler AOP; 3 Monate Winter-Silage → Industriekanal (in `milchproduktion.md`, `ueber-uns.astro`, TrustBar-Signale, Home-Text).

**B. Neue Design-Features**
- **Partnerschaften & Qualitäts-Labels:** Neuer Home-Abschnitt mit Stallvisite, IP-Suisse, SEMAG, Emmentaler AOP (Name, Kurzbeschreibung, Link).
- **Sub-Branding-Maskottchen pro Route:** Neue Strich-Icons (Hund/Berner Sennenhund, Kleeblatt, Kartoffel) im Stil von `Icon.astro`; pro Angebots-/Unterseite zugewiesenes Maskottchen als visuelles Sub-Branding; Vektor-Aufbau so, dass spätere CSS/JS-Animation möglich ist.
- **Typo-Hero „Moderne Typo mit spielerischen Akzenten":** Hero-Konzept aus `DESIGN_SYSTEM.md` §5 umsetzen (typobetonte Headline auf hellem Grund, Hand-Doodle-Akzente statt Standard-Full-Screen-Bild).
- **Trust-Signale (TrustBar):** Aktualisierung der Signale gemäss korrektem Fütterungszyklus (z. B. „Gras & Heu" statt falschem „Heufütterung im Winter").

## Capabilities

### New Capabilities
- `site-branding`: Konsistente Umbenennung des sichtbaren Hofnamens auf „Oberhusers" im Code sowie Entfernung der aufgelösten Betriebszweigegemeinschaft und Korrektur des Fütterungszyklus in allen Inhalten.
- `partnerships`: Home-Abschnitt „Partnerschaften & Qualitäts-Labels" mit den vier festen Partnern (Stallvisite, IP-Suisse, SEMAG, Emmentaler AOP) und deren Links.
- `sub-branding-mascots`: Sub-Branding-Maskottchen pro Route (Huhn, Kuh, Kartoffel/Weizen/Mais, Berner Sennenhund, Kleeblatt/Ensemble) als neue, animierbare Strich-Icons und deren Einbindung.
- `typo-hero`: Umsetzung des Hero-Konzepts „Moderne Typo mit spielerischen Akzenten" gemäss `DESIGN_SYSTEM.md` §5 für die Landingpage.
- `trust-signals`: Aktualisierte, korrekte Vertrauenssignale (TrustBar) bezüglich Weidegang und Fütterungszyklus.

### Modified Capabilities
- Keine – es existieren unter `openspec/specs/` noch keine Spezifikationen; alle Capabilities sind neu.

## Impact

- **Geänderte Dateien (Code):** `src/config/brand.ts`, `src/data/client.ts`, `src/config/umzug.ts`, `src/config/images.ts`, `src/components/Header.astro` (bei Bedarf), `src/components/Footer.astro` (bei Bedarf), `src/components/Hero.astro`, `src/components/About.astro`, `src/components/Spicker.astro`, `src/components/AngebotsGrid.astro`, `src/components/TrustBar.astro`, `src/components/Icon.astro`, `src/components/AnmeldeFormular.astro`, `src/components/UmzugHinweis.astro`, `src/pages/index.astro`, `src/pages/ueber-uns.astro`, `src/pages/[slug].astro` (bei Bedarf), `src/content/angebote/*.md`, `src/content.config.ts` (Kommentar), `src/styles/theme.css` (Kommentar).
- **Neu:** ggf. `src/components/Partnerschaften.astro` für die Partner-Leiste.
- **Keine** neuen Abhängigkeiten. `package.json`-Name, Domain und E-Mail werden **nicht** geändert.
- **Kein** technischer Breaking Change (`output: 'static'` bleibt; Routen-Slugs bleiben unverändert).
