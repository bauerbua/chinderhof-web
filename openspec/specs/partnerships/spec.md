# Partnerships Specification

## Purpose

Blendet auf der Home-/Landingpage einen festen Abschnitt „Partnerschaften & Qualitäts-Labels" ein, der die vier bestehenden Zusammenarbeiten des Hofs (Stallvisite, IP-Suisse, SEMAG, Emmentaler AOP) mit Kurzbeschreibung und Link sichtbar macht.

## Requirements

### Requirement: Partnerschaften-Abschnitt auf der Home
Die Home-/Landingpage MUSS einen sichtbaren Abschnitt „Partnerschaften & Qualitäts-Labels" enthalten, der die Zusammenarbeit des Hofs als Vertrauens-Baustein darstellt.

#### Scenario: Abschnitt ist auf der Startseite sichtbar
- **WHEN** die Startseite gerendert wird
- **THEN** ist ein Abschnitt mit der Überschrift „Partnerschaften & Qualitäts-Labels" sichtbar

### Requirement: Die vier Partner mit Kurzbeschreibung und Link
Der Partnerschaften-Abschnitt MUSS genau die vier festen Partner nennen und verlinken: Stallvisite, IP-Suisse, SEMAG und Emmentaler AOP.

#### Scenario: Stallvisite gelistet
- **WHEN** der Partnerschaften-Abschnitt geprüft wird
- **THEN** ist Stallvisite mit Kurzbeschreibung (Hof-Erlebnis & offene Stalltüren) und Link `https://www.schweizerbauern.ch/bauernhof-erleben/ausfluege/stallvisite/` enthalten

#### Scenario: IP-Suisse gelistet
- **WHEN** der Partnerschaften-Abschnitt geprüft wird
- **THEN** ist IP-Suisse mit Kurzbeschreibung (ganzheitliche nachhaltige Hof-Zertifizierung) und Link `https://www.ipsuisse.ch/` enthalten

#### Scenario: SEMAG gelistet
- **WHEN** der Partnerschaften-Abschnitt geprüft wird
- **THEN** ist SEMAG mit Kurzbeschreibung (Saatvermehrung von Pflanzkartoffeln) und Link `https://www.semag.ch/` enthalten

#### Scenario: Emmentaler AOP gelistet
- **WHEN** der Partnerschaften-Abschnitt geprüft wird
- **THEN** ist Emmentaler AOP mit Kurzbeschreibung (Käserei-Rohmilchlieferant) und Link `https://www.emmentaler.ch/` enthalten
