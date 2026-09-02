# Site Branding Specification

## Purpose

Stellt die sichtbare Markenkonzeption der Website auf den Hofnamen „Oberhusers" um und korrigiert veraltete Inhalte im Code: Entfernung der aufgelösten Betriebszweigegemeinschaft sowie korrekter Weide- und Fütterungszyklus der Milchkühe.

## Requirements

### Requirement: Sichtbarer Hofname Oberhusers
Der Code MUSS den sichtbaren Hof- und Markennamen als **Oberhusers** führen. „Chinderhof" darf weiterhin nur in nicht sichtbaren bzw. technischen Stellen bleiben, die bewusst ausgenommen sind (npm-Package-Name, Domain, E-Mail-Adresse).

#### Scenario: Seite trägt den Hofnamen Oberhusers
- **WHEN** die Startseite und die Unterseiten gerendert werden
- **THEN** erscheint in Header, Footer, Hero-Headline, Seitentitel (Meta) und Bestätigungstexten der Name „Oberhusers"

#### Scenario: Ausgenommene technische Stellen bleiben unverändert
- **WHEN** `package.json`-Name, `brand.url`, `client.domain` und die E-Mail-Adresse geprüft werden
- **THEN** bleiben diese unverändert (weiterhin Chinderhof-basiert bzw. Platzhalter, bis Domain/Adresse bestätigt sind)

### Requirement: Keine Betriebszweigegemeinschaft mehr
Der Code MUSS alle Erwähnungen der „Betriebszweigegemeinschaft" und der Familie „Scheidegger" aus sichtbaren Inhalten entfernen, da die Gemeinschaft aufgelöst wurde.

#### Scenario: Seiteninhalte ohne Betriebszweigegemeinschaft
- **WHEN** die Seiten Milchproduktion, Ackerbau und Über uns gerendert werden
- **THEN** taucht weder „Betriebszweigegemeinschaft" noch der Name „Scheidegger" in den sichtbaren Texten auf

### Requirement: Korrekter Weide- und Fütterungszyklus
Der Code MUSS den Umgang mit den Milchkühen korrekt beschreiben: Im Sommer (und generell 9 Monate) Weidegang mit reiner Gras-/Heufütterung, deren Milch als Rohmilch für Emmentaler-AOP-Käse dient; im Winter (3 Monate) Silage-Fütterung wegen Futter-/Lagermöglichkeiten, deren Milch in den Industriekanal fliesst. Eine pauschale Aussage „Heufütterung im Winter" ist zu vermeiden.

#### Scenario: Milchproduktionsseite beschreibt beide Phasen
- **WHEN** die Milchproduktionsseite geprüft wird
- **THEN** sind die 9-monatige Gras-/Heuphase (Milch → Emmentaler AOP) und die 3-monatige Winter-Silagephase (Milch → Industriekanal) korrekt und widerspruchsfrei beschrieben

#### Scenario: Trust-Signale entsprechend
- **WHEN** die Vertrauenssignale auf der Home geprüft werden
- **THEN** enthalten sie keine falsche Aussage über eine pauschale Winter-Heufütterung, sondern die korrekte Einordnung
