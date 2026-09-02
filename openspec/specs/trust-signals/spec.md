# Trust Signals Specification

## Purpose

Stellt die Vertrauenssignale (TrustBar) auf der Startseite auf die korrekten, präzisen Aussagen des Hofs um – insbesondere bezüglich Weidegang und Fütterungszyklus – und bindet dafür passende Symbole ein.

## Requirements

### Requirement: Korrekte Trust-Signale auf der Home
Die Vertrauenssignale auf der Startseite MÜSSEN den korrekten Umgang mit den Tieren widerspiegeln, ohne irreführende Pauschalen wie „Heufütterung im Winter", und zum tatsächlichen Fütterungszyklus passen.

#### Scenario: TrustBar zeigt korrekte Aussagen
- **WHEN** die TrustBar auf der Home gerendert wird
- **THEN** zeigt sie korrekte Signale (z. B. Weidegang im Sommer, Gras & Heu für den Emmentaler, 3 Monate Winter mit Silage), ohne falsche Winter-Heufütterungs-Pauschale

### Requirement: Symbole je Trust-Signal
Jedes Trust-Signal MUSS mit einem passenden eigenen Symbol aus dem Hof-Icon-Satz versehen sein.

#### Scenario: Jedes Signal hat ein Icon
- **WHEN** die TrustBar geprüft wird
- **THEN** verfügt jedes Signal über ein inhaltlich passendes Icon aus dem Icon-Satz
