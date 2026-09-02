## Purpose

Setzt das Hero-Konzept „Moderne Typo mit spielerischen Akzenten" aus `DESIGN_SYSTEM.md` §5 um: eine grosse, moderne Fraunces-Headline auf warmem, hellem Grund mit feinen handgezeichneten Doodle-Akzenten – statt eines reinen Full-Screen-Hero-Bilds als Standard.

## ADDED Requirements

### Requirement: Typobetonter Hero auf hellem Grund
Der Hero auf der Startseite MUSS typobetont umgesetzt sein: eine grosse, moderne Headline in Fraunces auf warmem, hellem Hintergrund (kein abgedunkeltes Vollbild-Foto als Standard).

#### Scenario: Hero zeigt grosse typografische Headline
- **WHEN** die Startseite gerendert wird
- **THEN** dominiert eine grosse Fraunces-Headline den Hero auf hellem Grund, ohne dass ein Vollbild-Foto als Standard darübergelegt ist

### Requirement: Handgezeichnete Doodle-Akzente
Der Hero MUSS spielerische, handgezeichnete Doodle-/Line-Art-Akzente enthalten (z. B. unterstrichene Schlüsselbegriffe oder schwebende Hof-Motive), die aus dem Logo-Entwurf / Maskottchen-Konzept abgeleitet sind.

#### Scenario: Doodle-Akzent im Hero sichtbar
- **WHEN** der Hero geprüft wird
- **THEN** ist mindestens ein handgezeichneter Doodle-/Maskottchen-Akzent sichtbar, der den modernen, hellen Stil auflockert

### Requirement: Kein Full-Screen-Hero-Bild als Standard
Das Hero-Layout MUSS sicherstellen, dass ein reines Full-Screen-Hero-Bild nicht der Standard ist; ein Bild kann optional nur als ergänzendes Element (z. B. kleine Bildkarte) erscheinen.

#### Scenario: Kein dominierendes Vollbild-Hero
- **WHEN** das Hero-Layout geprüft wird
- **THEN** ist kein abgedunkeltes, gedehntes Vollbild-Hintergrundfoto der dominante Bestandteil
