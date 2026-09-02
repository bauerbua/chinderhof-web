## Why

Die Eigentümerin des Hofs „Oberhusers" hat ergänzende Vorgaben und Feedback geliefert: den neuen Hofnamen, inhaltliche Korrekturen (aufgelöste Betriebszweigegemeinschaft, tatsächlicher Fütterungszyklus) sowie Design-Entscheidungen (Typo-Hero mit Hand-Doodles, Sub-Branding-Maskottchen pro Route, Anti-KI-Prinzipien). `README.md` und `DESIGN_SYSTEM.md` bilden die verbindliche Referenz für Projektinhalt und Design – sie müssen diese neuen Vorgaben exakt abbilden, damit spätere Umsetzung und Review konsistent bleiben.

## What Changes

**README.md (`/README.md`)**
- **Branding:** Projekt-/Markenname durchgängig von „Chinderhof" zu „Oberhusers" umbenennen (Titel, Vision, Tonfall, SEO).
- **Betriebszweigegemeinschaft entfernen:** Sämtliche Erwähnungen der „Betriebszweigegemeinschaft"/„Scheidegger-Betriebszweigegemeinschaft" ersatzlos entfernen (Seiteninhalte, Über uns, SEO-Keywords). Die Gemeinschaft wurde aufgelöst.
- **Milchproduktion & Fütterung korrigieren:** Winter (3 Monate) Silage-Fütterung → Milch in den Industriekanal; restliches Jahr (9 Monate) reine Gras-/Heufütterung → Rohmilch für Emmentaler AOP.
- **Neue Sektion „Partnerschaften & Qualitäts-Labels":** Vier bestehende Partner mit Kurzbeschreibung & Link (Stallvisite, IP-Suisse, SEMAG, Emmentaler AOP) in Sektion 3/4 ergänzen.
- **Vision-Prinzipien der Eigentümerin** in den Kern des Projekts aufnehmen (Wissen weitergeben, Einblick in Landwirtschaft, lokale Sicherheit, offener Hof, Vielseitigkeit).

**DESIGN_SYSTEM.md (`/DESIGN_SYSTEM.md`)**
- **Branding:** Titel & Wordmark von „Chinderhof" zu „Oberhusers".
- **Hero-Konzept:** „Moderne Typo mit spielerischen Akzenten" – typo-basierter Hero (Fraunces) mit handgezeichneten Doodles statt Full-Screen-Hero-Bild.
- **Sub-Branding:** Tier-/Pflanzen-Maskottchen pro Route (Huhn, Kuh, Kartoffel/Weizen/Mais, Berner Sennenhund, Kleeblatt/Ensemble) als animierbare Vektoren.
- **Farbpalette:** Bestehende Palette als Basis beibehalten; im Entwicklungsverlauf anpassbar (Sand/Creme-Ton aus dem Logo).
- **Anti-KI-Prinzipien:** Handgezeichnete Trennlinien, Polaroid-Bilder mit leichter Rotation, Schweizerdeutsch-Spicker, persönliche Notizen – gegen einen sterilen Template-Look.

## Capabilities

### New Capabilities
- `branding-and-content`: Verbindliche Anforderungen an den Inhalts-/Branding-Teil von `README.md` (Hofname Oberhusers, Entfernung der Betriebszweigegemeinschaft, korrekter Fütterungszyklus, Partnerschaften-Sektion, Vision der Eigentümerin).
- `design-system`: Verbindliche Design-Anforderungen in `DESIGN_SYSTEM.md` (Branding-Update, Hero-Konzept „Moderne Typo + Doodles", Sub-Branding-Maskottchen pro Route, Farbpalette, Anti-KI-Prinzipien).

### Modified Capabilities
- Keine – es existieren unter `openspec/specs/` noch keine Spezifikationen; beide Capabilities sind neu.

## Impact

- **Dateien (nur Dokumentation):** `/README.md`, `/DESIGN_SYSTEM.md`.
- **Kein Code-Verhalten betroffen:** `src/config/brand.ts`, `src/styles/theme.css` und Componenten werden in dieser Änderung **nicht** angepasst, aber `README.md`/`DESIGN_SYSTEM.md` dienen als Referenz für späteres Umsetzen.
- **Werkzeuge:** `openspec` (Schema `spec-driven`), keine neuen Abhängigkeiten.
- **Keine Breaking Changes** im technischen Sinne; inhaltlich veraltetete Aussagen (Betriebszweigegemeinschaft, Heufütterung das ganze Jahr) werden korrigiert.
