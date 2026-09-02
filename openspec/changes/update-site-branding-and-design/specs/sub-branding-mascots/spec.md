## Purpose

Setzt das Sub-Branding-Konzept aus `DESIGN_SYSTEM.md` §9 um: Jede Angebots-/Unterseite erhält ein zugewiesenes Logo-Element (Tier-/Pflanzenillustration) als Maskottchen, und diese Vektormotive werden so vorbereitet, dass sie später per CSS/JS animiert werden können.

## ADDED Requirements

### Requirement: Maskottchen-Icons pro Route
Das Icon-Set der Website MUSS die für das Sub-Branding nötigen Maskottchen enthalten: nebst bestehenden Strich-Motiven die neuen Motive Berner Sennenhund (Hund), Kleeblatt und Kartoffel, im Stil des Design-Systems (minimal, 1.75px Strich, runde Enden).

#### Scenario: Neue Maskottchen-Icons vorhanden
- **WHEN** das Icon-Set (`Icon.astro`) geprüft wird
- **THEN** sind die Motive für Hund, Kleeblatt und Kartoffel als benannte Icons verfügbar und per `name` abrufbar

### Requirement: Zuweisung des Maskottchens je Route
Jede Unter-/Angebotsseite MUSS das ihr zugewiesene Maskottchen als Sub-Branding zeigen: Huhn für `/freilandeier`, Kuh für `/milchproduktion`, Kartoffel/Weizen/Mais für `/ackerbau`, Berner Sennenhund für `/kinderprogramm`, Kleeblatt und Gesamtensemble für `/` und `/ueber-uns`.

#### Scenario: Freilandeier mit Huhn
- **WHEN** die Freilandeier-Seite gerendert wird
- **THEN** ist das Huhn als Maskottchen/Sub-Branding an der vorgesehenen Stelle sichtbar

#### Scenario: Kinderprogramm mit Berner Sennenhund
- **WHEN** die Kinderprogramm-Seite gerendert wird
- **THEN** ist der Berner Sennenhund als Maskottchen sichtbar

#### Scenario: Ackerbau mit Feld-Motiven
- **WHEN** die Ackerbau-Seite gerendert wird
- **THEN** sind Kartoffel/Weizen/Mais-Motive als Sub-Branding sichtbar

#### Scenario: Milchproduktion mit Kuh
- **WHEN** die Milchproduktions-Seite gerendert wird
- **THEN** ist die Kuh als Maskottchen sichtbar

### Requirement: Animierbarkeit der Maskottchen-Vektoren
Die Maskottchen-Vektoren MÜSSEN so aufgebaut sein, dass sie später per CSS/JS animiert werden können (z. B. Line-Drawing-Effekt beim Scrollen oder leichtes Wackeln bei Hover), ohne dass dafür ein Neudesign nötig ist.

#### Scenario: Vektor-Aufbau für Animation geeignet
- **WHEN** die SVG-Struktur der Maskottchen geprüft wird
- **THEN** sind die Pfade einzeln adressierbar (CSS-/JS-Animationen möglich), unterstützt durch `prefers-reduced-motion: reduce`-Behandlung
