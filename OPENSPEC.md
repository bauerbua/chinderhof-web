# OpenSpec: README.md & DESIGN_SYSTEM.md Aktualisierung

> Basierend auf Feedback der Eigentümerin (Hof „Oberhusers")
> Status: **Proposal** · Erstellt: 2026-09-02

---

## Context

Die Eigentümerin hat ergänzende Informationen zum Projekt geliefert: Hofname, Vision-Prinzipien, Designvorlieben, Partnerschaften und inhaltliche Korrekturen (Betriebszweigegemeinschaft aufgelöst, Fütterungszyklus aktualisiert). Diese Änderungen müssen in `README.md` und `DESIGN_SYSTEM.md` abgebildet werden.

---

## Änderung 1: Hofname & Branding

**Ziel:** Projekt von „Chinderhof" zu „Oberhusers" umbenennen.

### README.md
- Titel: `# Chinderhof – Projektbeschreibung` → `# Oberhusers – Projektbeschreibung`
- Erwähnungen von „Chinderhof" durchgängig ersetzen (Vision, Tonfall, SEO, Domain-Hinweise)
- Domain-Hinweis: `chinderhof.ch` → offen / zu klären (ist `oberhusers.ch` verfügbar?)

### DESIGN_SYSTEM.md
- Titel: `# Design-System „Chinderhof"` → `# Design-System „Oberhusers"`
- §4 Logo & Marke: Wordmark „CHINDERHOF" → „OBERHUSERS"
- §9 Marken-Elemente: „Chinderhof"-Referenzen anpassen

### Akzeptanzkriterien
- [ ] Keine Erwähnung von „Chinderhof" als Hof-/Markenname mehr vorhanden (nur noch als technischer Projektname falls nötig)
- [ ] Logo-Wordmark in allen Specs auf „OBERHUSERS" gesetzt

---

## Änderung 2: Vision & Designprinzipien

**Ziel:** Eigentümerin-Vision in die bestehenden Designprinzipien einbetten.

### DESIGN_SYSTEM.md – §1 Gefühl & Wirkung
Ergänze die Vision-Prinzipien der Eigentümerin als konkrete Leitlinien:

1. **Wissen weitergeben** – Wir geben gerne Wissen und Infos weiter, lassen Menschen einen Einblick in die Landwirtschaft erhalten.
2. **Lokale Sicherheit** – Klare Übersicht über Angebot & Betriebszweige.
3. **Keine Barriere** – Hof ist immer offen, alle sind jederzeit willkommen. Es soll keine Barriere zwischen Bauernhof und Kundinnen sein.
4. **Vielseitigkeit zeigen** – Der Hof soll seine Vielseitigkeit aufzeigen (Unterschied zu anderen Höfen).

### DESIGN_SYSTEM.md – §2 Visuelle Design-Prinzipien
Bestehende 4 Prinzipien beibehalten, ergänzen um:

5. **Klar statt kitschig** – Schlichtes, modernes Design. Keine klassische „Bauernhof-Romantik", sondern zeitgemäß und stilvoll.
6. **Einzigartig statt kopiert** – Kein KI-/Template-Look. Der Hof soll sich durch handgemachte Elemente von Copy-Paste-Projekten abheben.

### Akzeptanzkriterien
- [ ] Vision-Prinzipien der Eigentümerin in §1 als Leitlinien aufgenommen
- [ ] Sechstes Designprinzip in §2 ergänzt

---

## Änderung 3: Inhaltliche Korrekturen

**Ziel:** Veraltete/fehlerhafte Inhalte bereinigen.

### README.md – Betriebszweigegemeinschaft entfernen
Die Betriebszweigegemeinschaft wurde aufgelöst. Sämtliche Erwähnungen entfernen:
- §4 Seiten-Inhalte: Milchproduktion – „Betriebszweigegemeinschaft" löschen
- §4 Seiten-Inhalte: Über uns – „Familie + Scheidegger-Betriebszweigegemeinschaft" → nur noch Familie
- §8 SEO: „Betriebszweigegemeinschaft Emmental" aus Keywords entfernen

### README.md – Milchproduktion & Fütterung aktualisieren
- **Winter (3 Monate):** Silage-Fütterung wegen Futter-/Lagermöglichkeiten. Milch → Industriekanal.
- **Restliches Jahr (9 Monate):** Reine Fütterung mit Gras und Heu (keine Silage). Milch → Emmentaler AOP Käseherstellung.
- Bullen: werfen wir weg → NICHT auf die Website (laut Eigentümerin)

### Akzeptanzkriterien
- [ ] Keine Erwähnung der Betriebszweigegemeinschaft mehr vorhanden
- [ ] Fütterungszyklus korrekt beschrieben (3 Monate Silage/Industrie, 9 Monate Gras+Heu/Emmentaler)
- [ ] Bullen-Kein-Thema nicht explizit auf der Website

---

## Änderung 4: Partnerschaften & Labels (neue Sektion)

**Ziel:** Feste Partnerschaften auf der Website sichtbar machen.

### README.md – Neue Sektion in §4 (Seiten-Inhalte)
Neuer Abschnitt in Home/Landingpage: **„Partnerschaften & Qualitäts-Labels"**

Vier Partner mit Kurzbeschreibung und Verlinkung:

| Partner | Beschreibung | URL |
|---|---|---|
| **Stallvisite** | Hof-Erlebnis & offene Stalltüren – Mitglied im Schweizer Bauernverband | `https://www.schweizerbauern.ch/bauernhof-erleben/ausfluege/stallvisite/` |
| **IP-Suisse** | Ganzheitliche nachhaltige Hof-Zertifizierung | `https://www.ipsuisse.ch/` |
| **SEMAG** | Saatvermehrung von Pflanzkartoffeln | `https://www.semag.ch/` |
| **Emmentaler AOP** | Käserei-Rohmilchlieferant | `https://www.emmentaler.ch/` |

### README.md – Route Home anpassen
- Hero/Highlight-Leiste: Partnerschaften als Vertrauens-Baustein ergänzen
- CTA-Bereich: Logo-Leiste der Partner (optional)

### Akzeptanzkriterien
- [ ] Vier Partner in README.md unter Home-Inhalten spezifiziert
- [ ] Links und Kurzbeschreibungen korrekt

---

## Änderung 5: Hero-Konzept „Moderne Typo mit spielerischen Akzenten"

**Ziel:** Design-Richtung für das Hero-Layout festlegen.

### DESIGN_SYSTEM.md – Neue Sektion oder Ergänzung zu §5 (Formen & Flächen)
Layout-Vorgabe für die Landingpage:

**Konzept: Typo-Hero + Hand-Doodles**

- **Große, moderne Headlines** in Fraunces (Serifenschrift), warmes helles Hintergrund-Fundament
- **Integration von feinen, handgezeichneten Doodles/Line-Art-Elementen** (unterstrichene Begriffe, schwebende Hof-Motive)
- Doodles sind **direkt aus dem Logo-Entwurf abgeleitet** (die Tier-/Pflanzen-Illustrationen)
- **Kein Full-Screen-Hero-Bild** als Standard (nicht praktikabel für dynamische Inhalte)
- Stattdessen: Grosszügige Typografie mit dezenten handgezeichneten Akzenten

**Vorteil dieses Ansatzes:**
- Brückenschlag zwischen „stilvoll/modern" und „kinderfreundlich/herzlich"
- Unterscheidet sich von klassischen Bauernhof-Websites (voller Hero-Bildschirm)
- Einzigartig statt KI-Template

### Akzeptanzkriterien
- [ ] Hero-Konzept in DESIGN_SYSTEM.md spezifiziert
- [ ] Klare Abgrenzung zu Full-Screen-Hero-Bild

---

## Änderung 6: Sub-Branding – Tier-Maskottchen pro Route

**Ziel:** Jede Unterseite erhält ein zugewiesenes Logo-Element als visuelles Sub-Branding.

### DESIGN_SYSTEM.md – §9 Marken-Elemente erweitern

| Route | Maskottchen | Einsatz |
|---|---|---|
| `/freilandeier` | **Huhn** | Begrüssung im Header & Abo-Formular |
| `/milchproduktion` | **Kuh** | Begleitung bei Weide- & Emmentaler-Infos |
| `/ackerbau` | **Kartoffel, Weizen & Mais** | Trennlinie / Doodles |
| `/kinderprogramm` | **Berner Sennenhund** | Sympathisches Maskottchen ( existiert auf dem Hof) |
| `/ueber-uns` & `/` | **Kleeblatt & Gesamtes Ensemble** | Panorama-Logo |

**Technischer Hinweis:** Die Vektormotive (SVGs) sollen so vorbereitet werden, dass sie später per CSS/JS animiert werden können (z. B. Line-Drawing-Effekt beim Scrollen, leichtes Wackeln bei Hover).

### Akzeptanzkriterien
- [ ] Maskottchen-Zuordnung in §9 spezifiziert
- [ ] Technischer Hinweis zu Animierbarkeit aufgenommen

---

## Änderung 7: Anti-KI / Unique-Design-Prinzipien

**Ziel:** Sicherstellen, dass das Design nicht wie ein generisches Template wirkt.

### DESIGN_SYSTEM.md – Ergänzung zu §2 oder neue Sektion

Richtlinien gegen KI-/Mainstream-Look:

1. **Handgezeichnete Elemente** – Leicht unperfekte Trennlinien (analog zur Linie unter dem Schriftzug im Logo)
2. **Bilder im Fotokarten-/Polaroid-Stil** – Leichte Drehungen (±1–2°), weisser Rand
3. **Persönliche Notizen** – Sympathische Schweizerdeutsch-Spicker und persönliche Notizen am Seitenrand
4. **Eigene Doodles** – Aus dem Logo abgeleitete handgezeichnete Elemente statt Standard-Clipart
5. **Organische Formen** – Hügellinien, abgerundete Ecken, warme Schatten statt harter Linien

### Akzeptanzkriterien
- [ ] Anti-KI-Prinzipien in DESIGN_SYSTEM.md aufgenommen
- [ ] Klare Abgrenzung zu „sterilem Template-Look"

---

## Abhängigkeiten & Offene Punkte

| Punkt | Status | Next Step |
|---|---|---|
| Logo-Datei (SVG/PNG) | Offen | Wird nachgeliefert → Doodles und Sub-Branding können dann finalisiert werden |
| Domain-Name | Offen | `oberhusers.ch` prüfen |
| Farbpalette-Feinabstimmung | Offen | Kann im Laufe der Entwicklung angepasst werden |
| Moodboard/Pinterest-Vergleich | Erledigt | Richtung „Typo-Hero + Doodles" festgelegt |

---

## Dateien die geändert werden

| Datei | Änderungsumfang |
|---|---|
| `README.md` | Mittel – Branding, Vision, Korrekturen, neue Sektion |
| `DESIGN_SYSTEM.md` | Gross – Vision, Hero-Konzept, Sub-Branding, Anti-KI, Branding |

---

## Reihenfolge der Umsetzung

1. `README.md` – Branding (Chinderhof → Oberhusers), Betriebszweigegemeinschaft entfernen, Fütterung korrigieren
2. `README.md` – Vision-Prinzipien und Partner-Sektion ergänzen
3. `DESIGN_SYSTEM.md` – Branding, Vision, Designprinzipien aktualisieren
4. `DESIGN_SYSTEM.md` – Hero-Konzept, Sub-Branding, Anti-KI-Prinzipien spezifizieren
5. Konsistenz-Check zwischen beiden Dateien
