## Purpose

Definiert die verbindlichen Design-Anforderungen an `DESIGN_SYSTEM.md` für den Hof „Oberhusers": Branding-Update, Typo-Hero-Konzept mit Hand-Doodles, Sub-Branding-Maskottchen pro Route, Farbpalette und Anti-KI-Designprinzipien.

## ADDED Requirements

### Requirement: Design-System trägt den Hofnamen Oberhusers
Das `DESIGN_SYSTEM.md` MUSS den Hofnamen als **Oberhusers** tragen (Titel und Wordmark im Abschnitt Logo & Marke). Referenzen auf „Chinderhof" als Markenname entfallen.

#### Scenario: Titel und Wordmark auf Oberhusers
- **WHEN** das Dokument `DESIGN_SYSTEM.md` geöffnet wird
- **THEN** lautet der Titel `# Design-System „Oberhusers"` und der Wordmark ist auf „OBERHUSERS" gesetzt

### Requirement: Typo-Hero mit spielerischen Akzenten
Das `DESIGN_SYSTEM.md` MUSS als zentrales Hero-Layout das Konzept **„Moderne Typo mit spielerischen Akzenten"** festlegen: grosse, moderne Fraunces-Headlines auf warmem, hellem Hintergrund, kombiniert mit feinen, handgezeichneten Doodles/Line-Art-Elementen, die aus dem Logo-Entwurf abgeleitet sind. Ein Full-Screen-Hero-Bild ist nicht der Standard.

#### Scenario: Hero-Konzept dokumentiert
- **WHEN** das Hero-/Layout-Kapitel geprüft wird
- **THEN** ist das Konzept „Moderne Typo + Hand-Doodles" als verbindliches Layout festgehalten, das den Brückenschlag zwischen modern/stilvoll und kinderfreundlich/herzlich erklärt

#### Scenario: Full-Screen-Hero als Nicht-Standard
- **WHEN** das Hero-Konzept geprüft wird
- **THEN** ist festgehalten, dass ein reines Full-Screen-Hero-Bild nicht der empfohlene Standard ist

### Requirement: Sub-Branding-Maskottchen pro Route
Das `DESIGN_SYSTEM.md` MUSS für jede Unterseite ein zugewiesenes Logo-Element (Tier-/Pflanzen-Illustration) als visuelles Sub-Branding definieren und festhalten, dass die Vektormotive später per CSS/JS animierbar sein sollen (z. B. Line-Drawing beim Scrollen, Wackeln bei Hover).

#### Scenario: Maskottchen-Zuordnung definiert
- **WHEN** der Marken-/Sub-Branding-Abschnitt geprüft wird
- **THEN** sind die Zuordnungen dokumentiert: Huhn für Freilandeier, Kuh für Milchproduktion, Kartoffel/Weizen/Mais für Ackerbau, Berner Sennenhund für Kinderprogramm, Kleeblatt und Gesamtensemble für Über uns/Home

#### Scenario: Animierbarkeit der Vektoren
- **WHEN** der Sub-Branding-Abschnitt geprüft wird
- **THEN** ist der Hinweis enthalten, dass die SVG-Motive so vorbereitet werden, dass sie per CSS/JS animiert werden können

### Requirement: Farbpalette als Basis mit Anpassungsfähigkeit
Das `DESIGN_SYSTEM.md` MUSS die bestehende warme Farbpalette als Basis beibehalten und festhalten, dass sie im Verlauf der Entwicklung angepasst werden darf (z. B. warmer Sand-/Beigeton aus dem Logo) – ohne dass Textkontrast (WCAG AA) verletzt wird.

#### Scenario: Palettenmöglichkeit im Entwicklungsverlauf
- **WHEN** der Farb-Abschnitt geprüft wird
- **THEN** ist vermerkt, dass die Palette im Entwicklungsverlauf an bessere Kombinationen angepasst werden darf

### Requirement: Anti-KI- und Einzigartigkeit-Prinzipien
Das `DESIGN_SYSTEM.md` MUSS Richtlinien gegen einen sterilen KI-/Template-Look definieren: handgezeichnete, leicht unperfekte Trennlinien, Bilder im Polaroid-/Fotokarten-Stil mit leichter Rotation (±1–2°), sympathische Schweizerdeutsch-Spicker und persönliche Notizen am Seitenrand sowie aus dem Logo abgeleitete Doodles.

#### Scenario: Anti-KI-Richtlinien dokumentiert
- **WHEN** der Designprinzipien-Abschnitt geprüft wird
- **THEN** sind Handzeichnung, Polaroid-Stil mit leichter Rotation, Schweizerdeutsch-Spicker und persönliche Notizen als Schutz vor dem Template-Look festgehalten

### Requirement: Vision und Designprinzipien der Eigentümerin
Das `DESIGN_SYSTEM.md` MUSS die Vorstellung der Eigentümerin widerspiegeln: klar und modern mit spielerischen Elementen, ohne kitschige Bauernhof-Romantik und ohne einen klassischen KI-Design-Look.

#### Scenario: Designrichtung auf Klarheit getrimmt
- **WHEN** der Abschnitt „Gefühl & Wirkung"/Designprinzipien geprüft wird
- **THEN** ist die Richtung klar, modern und professionell mit dezenten, spielerischen Hand-Doodle-Akzenten verankert, die den Hof als einzigartig und nicht kopiert darstellen
