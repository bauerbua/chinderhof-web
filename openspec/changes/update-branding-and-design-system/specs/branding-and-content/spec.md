## Purpose

Definiert die verbindlichen Inhalts- und Branding-Anforderungen an `README.md` für den Hof „Oberhusers", inklusive korrektem Fütterungszyklus, Entfernung aufgelöster Betriebszweige, Partnerschaften-Sektion und der Vision der Eigentümerin.

## ADDED Requirements

### Requirement: Hofname Oberhusers
Das `README.md` MUSS den Hof- und Markennamen durchgängig als **Oberhusers** bezeichnen (Projekttitel, Vision, Tonfall, SEO-Keywords). Der alte Name „Chinderhof" darf nur noch als technischer/r Projektname erscheinen, nicht als Markenname.

#### Scenario: Titel trägt den Hofnamen Oberhusers
- **WHEN** das Dokument `README.md` geöffnet wird
- **THEN** lautet der Haupttitel `# Oberhusers – Projektbeschreibung` bzw. entspricht dem Hofnamen, ohne „Chinderhof" als Markenname

#### Scenario: Kein Markenname Chinderhof
- **WHEN** die Inhalte von `README.md` durchsucht werden
- **THEN** kommt „Chinderhof" nicht mehr als Hof-/Markenname vor, sondern maximal als technischer Kontext

### Requirement: Betriebszweigegemeinschaft entfernt
Das `README.md` MUSS sämtliche Erwähnungen der „Betriebszweigegemeinschaft" bzw. „Scheidegger-Betriebszweigegemeinschaft" ersatzlos entfernen, da die Gemeinschaft aufgelöst wurde.

#### Scenario: Keine Erwähnung in Seiteninhalten
- **WHEN** die Abschnitte zu Milchproduktion und Über uns geprüft werden
- **THEN** ist keine Erwähnung der Betriebszweigegemeinschaft mehr vorhanden

#### Scenario: Keine Erwähnung in SEO-Keywords
- **WHEN** die SEO-Fokus-Keywords in `README.md` geprüft werden
- **THEN** ist „Betriebszweigegemeinschaft Emmental" nicht mehr enthalten

### Requirement: Korrekter Fütterungszyklus der Milchkühe
Das `README.md` MUSS die Fütterung der Milchkühe korrekt beschreiben: Im Winter (3 Monate) wird wegen begrenzter Futter-/Lagermöglichkeiten Silage gefüttert und die Milch fliesst in den Industriekanal; im restlichen Jahr (9 Monate) erfolgt reine Gras- und Heufütterung (keine Silage) und die Milch dient als Qualitäts-Rohmilch für die Emmentaler-AOP-Käseherstellung.

#### Scenario: Winterphase beschrieben
- **WHEN** der Abschnitt Milchproduktion geprüft wird
- **THEN** wird die 3-monatige Silage-Fütterung mit Milchfluss in den Industriekanal beschrieben

#### Scenario: Sommer- und Übergangsphase beschrieben
- **WHEN** der Abschnitt Milchproduktion geprüft wird
- **THEN** wird die 9-monatige reine Gras-/Heufütterung mit Milchlieferung für Emmentaler AOP beschrieben

### Requirement: Partnerschaften und Qualitäts-Labels
Das `README.md` MUSS auf der Home-/Landingpage (Sektion 3/4) einen Abschnitt **„Partnerschaften & Qualitäts-Labels"** enthalten, der die folgenden vier bestehenden Partner mit Kurzbeschreibung und Verlinkung auflistet.

#### Scenario: Stallvisite gelistet
- **WHEN** der Partner-Abschnitt geprüft wird
- **THEN** ist Stallvisite mit Kurzbeschreibung (Hof-Erlebnis & offene Stalltüren) und Link `https://www.schweizerbauern.ch/bauernhof-erleben/ausfluege/stallvisite/` enthalten

#### Scenario: IP-Suisse gelistet
- **WHEN** der Partner-Abschnitt geprüft wird
- **THEN** ist IP-Suisse mit Kurzbeschreibung (ganzheitliche nachhaltige Hof-Zertifizierung) und Link `https://www.ipsuisse.ch/` enthalten

#### Scenario: SEMAG gelistet
- **WHEN** der Partner-Abschnitt geprüft wird
- **THEN** ist SEMAG mit Kurzbeschreibung (Saatvermehrung von Pflanzkartoffeln) und Link `https://www.semag.ch/` enthalten

#### Scenario: Emmentaler AOP gelistet
- **WHEN** der Partner-Abschnitt geprüft wird
- **THEN** ist Emmentaler AOP mit Kurzbeschreibung (Käserei-Rohmilchlieferant) und Link `https://www.emmentaler.ch/` enthalten

### Requirement: Vision der Eigentümerin
Das `README.md` MUSS die Vision der Eigentümerin als Kern des Projekts widerspiegeln: Wissen und Infos teilen, Menschen einen Einblick in die Landwirtschaft geben, klare lokale Übersicht über Angebot und Betriebszweige, ein offener Hof ohne Barriere zu Kundinnen sowie die sichtbare Vielseitigkeit des Betriebs.

#### Scenario: Vision-Prinzipien dokumentiert
- **WHEN** die Vision in `README.md` geprüft wird
- **THEN** sind die Prinzipien Wissensweitergabe, Einblick in die Landwirtschaft, lokale Sicherheit/Übersicht, offener Hof und Vielseitigkeit enthalten
