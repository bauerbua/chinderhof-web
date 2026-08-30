# Design-System „Chinderhof"

> Dieses Dokument ist die verbindliche Referenz für Design-Entscheidungen im Projekt.
> Änderungen am Aussehen stehen hier zuerst – danach im Code (`src/styles/theme.css` + `src/config/brand.ts`).

---

## 1. Gefühl & Wirkung – der „Anker" des Designs

> Dieses Kapitel ist die **Basis** des gesamten Design-Systems. Farben, Typografie,
> Formen, Icons und Bilder leiten sich daraus ab – nicht umgekehrt.

### 1.1 In einem Satz

> **„Heimelig, ehrlich, spielerisch – das Emmental im modernen Familienformat."**

### 1.2 So soll es sich anfühlen (Bildgedanke)

Stell dir vor, du biegst an einem warmen Sommernachmittag in den Hof ein: goldenes Licht,
es duftet nach Heu und frischer Milch, irgendwo kichert ein Kind, eine Ziege blökt, und
jemand winkt dir freundlich zu – obwohl er dich noch nie gesehen hat.

**Auf der Website sollst du dich genauso fühlen: willkommen, entspannt, ein bisschen wie zu Hause.**
Der Auftritt ist keine digitale Werbefläche, sondern wie «der Weg über den Hofplatz»:
man kann gemütlich anhalten, schauen, Fragen stellen und kommt unbeschwert wieder.

### 1.3 Gefühle, die die Website auslösen soll

| Gefühl | Bedeutung für uns |
|---|---|
| **Willkommensein** | Der Hof lädt ein – niemand muss sich zurechtfinden wie in einer grossen Organisation. |
| **Vertrauen** | Man sieht die Hände, die Tiere, den ehrlichen Umgang: hier kann man bedenkenlos bestellen und Kinder hinschicken. |
| **Gemütlichkeit & Wärme** | Geborgenheit, Ruhe, «es ist gut hier». Wichtig: **gemütlich, nicht langweilig**. |
| **Freude & ein Schmunzeln** | Kleine spielerische Details (Maskottchen, Schwyzerdütsch-Kärtchen) machen den Besuch vergnüglich – gerade für Familien. |
| **Stolz & Ehrlichkeit** | Regionalität, Handwerk, Emmentaler-Haltung: selbstbewusst, ohne anzugeben. |
| **Neugier** | Der Hof, die Tiere, die Produkte wollen erlebt werden: «das möchte ich sehen / probieren». |

### 1.4 Persönlichkeit: «Wenn der Chinderhof eine Person wäre …»

- Herzlich und bodenständig, mit trockenem Humor.
- Gastfreundlich: kümmert sich, haut aber nicht auf die Pauke.
- Direkt und unkompliziert – kein Formular-Bürokrat, kein Verkäufer-Ton.
- Familienmensch mit Freude an Kindern, Tieren und anständigen Sachen.
- Stolz aufs Handwerk ohne Grosskotzigkeit: lieber guten Käse teilen als sich zu brüsten.

### 1.5 Für wen es sich so anfühlen soll

| Person | Gefühl beim Besuch |
|---|---|
| Familie mit Kindern | «Hier sind wir richtig – sicher, spannend, herzlich.» |
| Lokale Kund:in (Eier-Abo) | «Einfach und vertraut – ich weiss, woher meine Eier kommen.» |
| Abnehmer:in / B2B (Milch, Getreide) | «Verlässlich, handwerklich, qualitätsbewusst – angenehm im Umgang.» |
| Wanderer / Spaziergänger | «Ein Hof, wo man anhalten und winken darf.» |

### 1.6 Stimmungs-Wörter

**Dazugehörend:** heimelig · ehrlich · warm · sonnig · lebendig · verspielt (aber fein) ·
ruhig · grosszügig · bodenständig · nah · handgemacht · «ufs Örtli»-Lebensgefühl.

**Ausdrücklich NICHT:** steril · technisch-kühl · anonym · werblich-grosskotzig ·
hektisch · laut · kitschige Alpenromantik (kein Kuhglocken-Klischee) · billig ·
dunkel-düster · nervös überladen.

### 1.7 Sinnliche Übersetzung (Brücke zu den Design-Entscheidungen)

| Sinn | Was wir kennen | Übersetzung ins Design |
|---|---|---|
| **Licht** | Warmes, goldenes Abendlicht | Rahm/Beige-Creme statt kaltem Weiss; warme Schatten statt grauer |
| **Material** | Holz, Heu, Leinen – weich und körnig | Organische Formen, weiche Radien, freundliche Mikro-Bewegungen |
| **Klang** | Vogelgezwitscher, Kinderlachen | Ruhige, grosszügige Flächen; dezente statt hektische Animationen |
| **Geruch** | Heu, Most, frisch gemolken | Warme Farbtöne (Tannengrün, Heu-Gold, Terrakotta); echte Fotos ohne schwere Filter |

## 2. Design-Prinzipien (aus §1 abgeleitet)

1. **Heimelig statt perfekt** – warme Oberflächen, organische Formen, kleine „Krickeli"
   (handgezeichnete Doodle-Hervorhebungen). Nicht steril, nicht kitschig.
2. **Ehrlich** – authentische Fotos ohne schwere Filter. Fliesstext in der **Systemschrift**,
   sprich: Null Webload für Standardtext.
3. **Spielerisch, nie kindisch** – Maskottchen und Schwyzerdütsch-Spicker für Familien,
   trotzdem zurückhaltend genug für B2B.
4. **Emmental statt Alpenkitsch** – Tannengrün, Heu-Gold, Hügellinien; modern und klar gesetzt.

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

## 4. Typografie

| Ebene | Schrift | Schnitt | Hinweis |
|---|---|---|---|
| Headings (h1–h4) | **Fraunces** (via Bunny Fonts) | 500–600, gesperrt leicht | warm, handwerklich, editorial; in Kursiv als Zitat-Akzent |
| Body (p, li, a …) | **Systemschrift** (`system-ui`) | 400/500 | maximal lesbar, 0 Ladegewicht |
| Kicker/Labels | Systemschrift, **Uppercase**, weit getrackt | 700 | `fir`-farbig, sauberer Kontrast zu den Serifen |

- Fraunces wird **gemischt** gesetzt (kein `uppercase` auf Headlines).
- Ausnahme: Wordmark/Logo „CHINDERHOF" sowie Footer-Überschriften bleiben uppercase-style.
- Bunny Fonts ist DSG-konform; optional → Fraunces später selbst hosten (wie zuvor Oswald/Inter).

## 5. Formen & Flächen (organic)

- **Radien:** Karten `20–28px`, Buttons & Eingabefelder **pill** (`999px`), kleine Chips pill.
- **Signatur-Element „Emmentaler-Hügellinie":** sanfte SVG-Kurve als Übergang zwischen
  Sektionen (derzeit oben auf den CTA-Sektionen).
- **Doodle** (handgezeichnete Unterstreichung) um Schlüsselbegriffe (z. B. „Emmentalerfamilie").
- **Schatten:** weich & warm `rgba(43, 35, 26, …)` – keine harten grauen Schatten.
- **Galerieschiene:** Bilder wie Polaroids – leichte Rotation (±1–2°), weisser Rand, dezent.

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

- **Bis zur Lieferung:** Wordmark („Chinderhof") in Fraunces semibold, `fir`.
- **Regeln (gelten vorab):**
  - Schutzraum ≥ 1× „C"-Höhe rundum, minimal Wordmark 160px, Symbol 32px.
  - Primär `fir` auf `warm-white`/`cream`; nie direkt auf foto ohne dunkles Overlay.
  - Footer/Stempel: weiss / fir-deep-Variante.
  - Favicon-Update sobald Logo-Dateien da sind (aktuell: Scheune-SVG).

## 9. Marken-Elemente

### Tier-Maskottchen
- Strich-Huhn im Icon-Stil (gleiche Zeichenlogik wie §6). Name: offen → Besitzerin bestimmt.
- Einsatz zurückhaltend (z. B. Aufsörteln-Botschaft, kleine Randfigur), nie überall.

### Schweizerdeutsch-Spicker („Selbstverständlich uf em Chinderhof")
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
