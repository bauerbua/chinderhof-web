# Design-System „Oberhusers"

> Dieses Dokument ist die verbindliche Referenz für Design-Entscheidungen im Projekt.
> Änderungen am Aussehen stehen hier zuerst – danach im Code (`src/styles/theme.css` + `src/config/brand.ts`).

---

## 1. Gefühl & Wirkung – der „Anker" des Designs
1. Wie soll die Website bei Kund*innen wirken?

Herzlich, authentisch, bodenständig und modern.
Man soll sofort das Gefühl bekommen, einen echten Familienbetrieb kennenzulernen – nicht eine anonyme Landwirtschaftsmarke.

2. Wie soll sie sich für Nutzer*innen anfühlen?

Nahbar, unkompliziert und vertrauenswürdig.
Besucher*innen sollen sich willkommen fühlen, den Hof und seine Werte kennenlernen und ohne Hürden ein Angebot nutzen oder Kontakt aufnehmen können.

3. Wie soll sie auf keinen Fall wirken?

Nicht kitschig, nicht altmodisch und nicht wie klassische Werbung.
Keine künstliche „Bauernhof-Romantik“, keine übertriebene Werbesprache und kein steriles Corporate Design.

4. Was soll die Website von Wettbewerber*innen unterscheiden?

Die Persönlichkeit des echten Hofs.
Familie, Tiere, Landschaft und Arbeitsweise werden ehrlich und direkt gezeigt. Der regionale Emmentaler Charakter und ein dezenter Schweizerdeutsch-Touch machen den Hof Oberhusers unverwechselbar.

5. Was sollen Besucher*innen am Ende denken und tun?

„Das ist ein sympathischer, vertrauenswürdiger Hof aus meiner Region.“
Danach sollen sie sich konkret für ein Angebot interessieren und möglichst unkompliziert ein Eier-Abo bestellen, sich für einen Kindernachmittag anmelden oder Kontakt aufnehmen.

Daraus würde ich 4 zentrale Designprinzipien ableiten

1. Echt statt inszeniert
Authentische Bilder, echte Menschen, echte Geschichten.

2. Modern, aber nicht glatt
Zeitgemäßes Webdesign, ohne den bäuerlichen Charakter zu verlieren.

3. Herzlich statt werblich
Persönliche Sprache und warme Gestaltung statt Marketing-Floskeln.

4. Einfach statt kompliziert
Klare Navigation, verständliche Informationen und möglichst kurze Wege zu Abo, Anmeldung und Kontakt.

5. Klar statt kitschig
Schlichtes, modernes und professionelles Design. Keine klassische „Bauernhof-Romantik“ – zeitgemäß und stilvoll, mit dezenten, spielerischen Akzenten statt übertriebener Deko.

6. Einzigartig statt kopiert
Kein KI-/Template-Look. Der Hof soll sich durch handgemachte Elemente (Doodles, persönliche Notizen, Spicker) von Copy-Paste-Projekten abheben und wie ein echtes, einzigartiges Projekt wirken.

## 2. Visuelle Design-Prinzipien (ergänzend zu §1)

Die vier metaphorischen Leitsterne aus §1 (Echt statt inszeniert, Modern aber nicht glatt, Herzlich statt werblich, Einfach statt kompliziert) werden hier um konkrete visuelle Umsetzungsprinzipien ergänzt:

1. **Heimelig statt perfekt** – warme Oberflächen, organische Formen, kleine „Krickeli"
   (handgezeichnete Doodle-Hervorhebungen). Nicht steril, nicht kitschig.
2. **Emmental statt Alpenkitsch** – Tannengrün, Heu-Gold, Hügellinien; modern und klar gesetzt.
3. **Spielerisch, nie kindisch** – Maskottchen und Schwyzerdütsch-Spicker für Familien,
   trotzdem zurückhaltend genug für B2B.
4. **Null Webload** – Fliesstext in der Systemschrift, Bilder optimiert (WebP/AVIF), keine unnötigen Extras.
5. **Anti-KI / kein Template-Look** – Handgezeichnete, leicht unperfekte Trennlinien (analog zur Linie unter dem Schriftzug im Logo), Bilder im Fotokarten-/Polaroid-Stil mit leichter Rotation (±1–2°) und weissem Rand, sympathische Schweizerdeutsch-Spicker und persönliche Notizen am Seitenrand. So wirkt der Hof wie ein echtes Projekt statt einer generischen Vorlage.

## 3. Farbwelt (almenwirtschaftlich warm)

| Token | Name | Hex | Verwendung |
|---|---|---|---|
| `fir`        | Tannengrün    | `#2F5D2A` | Primär: Überschriften, Buttons, Links, Header, Banner |
| `fir-deep`   | Dunkelgrün    | `#244A1F` | Hover/aktiv, Footer, Text auf Gold |
| `salbei`     | Salbei        | `#748F63` | Sekundäre Flächen & Hintergründe (≤ 30% Alpha), nie für Text |
| `gold`       | Heu-Gold      | `#D9A12B` | Akzent 2: Buttons (mit `fir-deep`-Text), Chips, Highlights |
| `gold-soft`  | Gold-hell     | `#F1DFB0` | Spicker-/Chip-Hintergrund |
| `terracotta` | Ziegeldach    | `#C2603C` | Akzent 1: Icons, Doodle, Grafiken, grosse Texte |
| `cream`      | Rahm          | `#FAF4E8` | Karten, Sektions-Hintergrund (`surface`) |
| `warm-white` | Wärme-Weiss   | `#FDFAF2` | Seitenhintergrund (`background`) |
| `wood`       | Holzbraun     | `#2B231A` | Fliesstext (`text`) |
| `stone`      | Stein         | `#6E6659` | Sekundärtext (`text-muted`) |
| `line`       | Flachslinie   | `#E9DFC9` | Borders, Trennlinien |

### Farbregeln

- **Kontrast (WCAG AA):** Fliesstext immer `wood` oder `fir-deep` (≥ 4.5:1).
  `gold` & `terracotta` nur für **grafische/grosse** Elemente – nie für normalen Text.
- **Buttons:** `gold`-Buttons mit `fir-deep`-Text (≈ 4.4:1, für fett gesetzten Button-Text ok);
  `fir`-Buttons mit Weiss (≈ 7.4:1).
- **Akzent-Mischung** je Sektion/Moment max. **70 % Grün / 15 % Gold / 15 % Terrakotta**
  der Akzentflächen – warm, aber kein „Weihnachtsbaum".
- `salbei` nur als Fläche (z. B. `bg-primary-light/10`), nie als Textfarbe.

> **Anpassungsfähige Basis:** Diese Palette ist die Ausgangsbasis und darf im Laufe der Entwicklung an bessere Kombinationen angepasst werden (z. B. ein wärmerer Sand-/Beigeton aus dem Logo als Hintergrund). Dabei bleiben die WCAG-AA-Kontrastregeln oben verbindlich – keine Anpassung auf Kosten der Lesbarkeit.

## 4. Typografie

| Ebene | Schrift | Schnitt | Hinweis |
|---|---|---|---|
| Headings (h1–h4) | **Fraunces** (via Bunny Fonts) | 500–600, gesperrt leicht | warm, handwerklich, editorial; in Kursiv als Zitat-Akzent |
| Body (p, li, a …) | **Systemschrift** (`system-ui`) | 400/500 | maximal lesbar, 0 Ladegewicht |
| Kicker/Labels | Systemschrift, **Uppercase**, weit getrackt | 700 | `fir`-farbig, sauberer Kontrast zu den Serifen |

- Fraunces wird **gemischt** gesetzt (kein `uppercase` auf Headlines).
- Ausnahme: Wordmark/Logo „OBERHUSERS" sowie Footer-Überschriften bleiben uppercase-style.
- Bunny Fonts ist DSG-konform; optional → Fraunces später selbst hosten (wie zuvor Oswald/Inter).

## 5. Formen & Flächen (organic)

- **Radien:** Karten `20–28px`, Buttons & Eingabefelder **pill** (`999px`), kleine Chips pill.
- **Signatur-Element „Emmentaler-Hügellinie":** sanfte SVG-Kurve als Übergang zwischen
  Sektionen (derzeit oben auf den CTA-Sektionen).
- **Doodle** (handgezeichnete Unterstreichung) um Schlüsselbegriffe (z. B. „Emmentalerfamilie").
- **Schatten:** weich & warm `rgba(43, 35, 26, …)` – keine harten grauen Schatten.
- **Galerieschiene:** Bilder wie Polaroids – leichte Rotation (±1–2°), weisser Rand, dezent.

### Hero-Konzept „Moderne Typo mit spielerischen Akzenten"

- **Layout:** Statt eines reinen Full-Screen-Hero-Bilds steht primär ein **Typo-Hero** im Zentrum: grosse, moderne Headlines in **Fraunces** auf warmem, hellem Hintergrund-Fundament (kein abgedunkeltes Vollbild-Foto als Standard).
- **Spielerische Akzente:** Feine, handgezeichnete Doodles/Line-Art-Elemente (unterstrichene Begriffe, schwebende Hof-Motive), die **direkt aus dem neuen Logo-Entwurf** (Tier- und Pflanzenillustrationen) abgeleitet sind.
- **Wirkung:** Brückenschlag zwischen „stilvoll/modern" und „kinderfreundlich/herzlich"; unterscheidet sich von klassischen Bauernhof-Websites mit Vollbild-Hero.
- Full-Screen-Hero-Bilder sind damit **nicht der Standard**, sondern optional/Gegensteuer.

## 6. Icons & Ornamente („Eigene Hof-Motive")

- **Stil:** minimal, 1.75px Strich, runde Enden, `fir`, `terracotta` oder `gold` je Einsatz.
- **Motiv-Set** (`src/components/Icon.astro`): Ei, Huhn, Weizenähre, Emmentaler (mit Löchern!),
  Kuh, Ziege, Kaninchen, Apfel, Scheune, Pfote, Minipig, Milchkanne, Sonne, Herz,
  Funkel („gäbig"), Spross, Häkchen, Pfeil.
- Ausschliesslich eigene Motive statt Standard-Icon-Sets verwenden.

## 7. Fotografie („authentisch & warm")

- Warmes/weiches Licht (goldene Stunde), Farben ungefiltert, echte Momente > gestellte Shots.
- Keine Duotonen, keine harten Vignetten.
- Formate: WebP/AVIF (Astro+Sharp), `loading=lazy` ausser Hero, Hero-Size reduziert.
- Alt-Texte auf allen Fotos (deutsch, beschreibend).

## 8. Logo & Marke (Lieferung offen)

- **Bis zur Lieferung:** Wordmark („Oberhusers") in Fraunces semibold, `fir`.
- **Regeln (gelten vorab):**
  - Schutzraum ≥ 1× „C"-Höhe rundum, minimal Wordmark 160px, Symbol 32px.
  - Primär `fir` auf `warm-white`/`cream`; nie direkt auf foto ohne dunkles Overlay.
  - Footer/Stempel: weiss / fir-deep-Variante.
  - Favicon-Update sobald Logo-Dateien da sind (aktuell: Scheune-SVG).

## 9. Marken-Elemente

### Tier-Maskottchen
- Strich-Huhn im Icon-Stil (gleiche Zeichenlogik wie §6). Name: offen → Besitzerin bestimmt.
- Einsatz zurückhaltend (z. B. Aufsörteln-Botschaft, kleine Randfigur), nie überall.

### Sub-Branding-Maskottchen pro Route
Das Gesamtlogo „OBERHUSERS" besteht aus einer Reihe einzelner Tier- und Pflanzen-Illustrationen. Jede Unterseite/Sparte erhält ein zugewiesenes Logo-Element als visuelles Sub-Branding:

| Route | Maskottchen | Einsatz |
|---|---|---|
| `/freilandeier` | **Huhn** | Begrüssung im Header & Abo-Formular |
| `/milchproduktion` | **Kuh** | Begleitung bei Weide- & Emmentaler-Infos |
| `/ackerbau` | **Kartoffel, Weizen & Mais** | Trennlinie / Doodles |
| `/kinderprogramm` | **Berner Sennenhund** | Sympathisches Maskottchen (lebt auf dem Hof) |
| `/ueber-uns` & `/` | **Kleeblatt & Gesamtes Ensemble** | Panorama-Logo |

> **Technischer Hinweis:** Die Vektormotive (SVGs) werden so vorbereitet, dass sie später per CSS/JS animiert werden können (z. B. Line-Drawing-Effekt beim Scrollen, leichtes Wackeln bei Hover).

### Schweizerdeutsch-Spicker („Selbstverständlich uf em Oberhusers")
- Kärtchen (Chips) in `gold-soft`, Wort in `fir-deep` + Icon in `terracotta`, Bedeutung dahinter.
- Wortliste (Besitzerin prüft): **Hoschtert** (Obstgarten), **Schüür** (Scheune),
  **Gitzeli** (Zicklein), **Chalb** (Kalb), **Heuet** (Heuernte), **gäbig** (praktisch).

## 10. Komponenten-Styles

| Komponente | Stil |
|---|---|
| Button primary | pill, `fir`, weiss, hover `fir-deep`, kurzer Lift |
| Button CTA/gold | pill, `gold`, `fir-deep` |
| Button secondary | pill, Outline `fir` / `fir-deep` |
| Karten | `cream` oder `warm-white`, Radius 20–28, warme Schatten |
| Formularfelder | pill, `line`-Border, Fokus-Ring `fir` (2px + Offset) |
| Links | `fir`, Unterstreichung beim Hover (nie „Link-Blau") |
| Chips/Spicker | `gold-soft`-Bg, `fir-deep`-Text, pill |
| Eyebrows/Kicker | Uppercase, weit getrackt, **`fir`** (nicht gold – Kontrast) |

## 11. Motion & Reaktion

- Mikrointeraktionen: Buttons heben (translate-y + Schatten), Karten-Hover leicht heben,
  Galeriebilder richten sich auf (rotate→0).
- **`prefers-reduced-motion: reduce`** deaktiviert alle Animationen (bereits implementiert).
- Seitenwechsel via Astro View Transitions (aktiv).

## 12. Barrierefreiheit & Qualität (DoD)

- Textkontraste ≥ 4.5:1 (AA), grosse/fette Texte ≥ 3:1 → im Code verifiziert für §3-Paare.
- Fokus sichtbar (`focus-visible`-Ringe), logische Tab-Reihenfolge.
- `geführte` Alt-Texte, semantische Struktur (`main`, `nav`, `article`, `ul/li`).
- Performance: kein Webload für Body-Text; Fraunces mit `display=swap`; Bilder optimiert.

## 13. Token-Referenz (Code)

| Token | Design-System | Code |
|---|---|---|
| `fir` | `--color-primary` | Tailwind: `text-primary`, `bg-primary` |
| `fir-deep` | `--color-primary-dark` | `text-primary-dark`, `bg-dark` (Footer) |
| `salbei` | `--color-primary-light` | `bg-primary-light/10` |
| `gold` | `--color-accent` | `bg-accent`, `text-accent` (grafisch) |
| `gold-soft` | `--color-accent-soft` | `bg-accent-soft` |
| `terracotta` | `--color-terracotta` | `text-terracotta` |
| `cream` | `--color-surface` | `bg-surface` |
| `warm-white` | `--color-background` | `bg-background` |
| `wood` | `--color-text` | `text-text` |
| `stone` | `--color-text-muted` | `text-text-muted` |
| `line` | `--color-border` | `border-border` |
| Fraunces | `--font-heading` | `font-heading` |
| Systemschrift | `--font-body` | `font-body` |

> Nicht-Ziele: keine dunkle Farbwelt (nur hell), keine Illustrationen neben den Icons,
> keine Animationen um ihrer selbst willen.
