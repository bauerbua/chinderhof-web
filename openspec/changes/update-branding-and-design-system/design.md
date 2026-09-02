## Context

Siehe proposal.md – Why. Es gibt noch keine bestehenden Specs unter `openspec/specs/` (grünfeld). `README.md` und `DESIGN_SYSTEM.md` sind die einzigen beiden Verbundreferenz-Dokumente; `src/config/brand.ts` und `src/styles/theme.css` spiegeln Design-Tokens, werden aber in dieser Änderung **nicht** angefasst. Schema `spec-driven` (lokal unter `openspec/`).

## Goals / Non-Goals

**Goals:**
- `README.md` inhaltlich und markenseitig korrekt und konsistent aktualisieren.
- `DESIGN_SYSTEM.md` markenseitig und designseitig dem neuen Konzept entsprechend überarbeiten.
- Dokumentierte Anforderungen mit den Scenario-basierten Specs abgleichen (Akzeptanzkriterien).

**Non-Goals:**
- **Kein** Code: `src/`, `brand.ts`, `theme.css`, Komponenten, Routen werden nicht geändert.
- Kein Entwurf/Bereitstellung von Logodateien (Logo wird später vom Auftraggeber geliefert).
- Keine Design-Entscheidung final über die Farbpalette (bleibt wie beschrieben anpassungsfähig).

## Decisions

**D1 – Widerverwendbarkeit des bestehenden Aufbaus beibehalten**
Die Abschnittsstruktur von `README.md` (§1–§11) und `DESIGN_SYSTEM.md` (§1–§13) bleibt erhalten. Änderungen erfolgen gezielt in bestehenden Abschnitten, neu Hinzugefügtes wird als eigener Abschnitt/Unterabschnitt platziert. *Grund:* Minimale Diff-Grösse, bessere Reviewbarkeit, keine strukturelle Migration nötig.
*Alternativen:* Komplette Neuschreibung (verworfen – verlustbehaftet und unnötig).

**D2 – Branding als sektionsübergreifende Suchen & Ersetzen + manuelle Verifikation**
„Chinderhof" → „Oberhusers" wird nicht blind per Massentausch realisiert; der technische Projektname darf ggf. als Kontext bleiben. Daher: Suchen nach allen Vorkommnissen (inkl. `CHINDERHOF`-Wordmark, Footer, Impressum/Rechtliches), manuelle Einzelfallentscheidung, ob Marke getroffen ist.
*Grund:* Verhindert unerwünschte Umbenennung technischer Bezeichner.

**D3 – Inhaltliche Korrekturen als präzise Einzelerfassung statt Freitext**
Fütterungszyklus und Betriebszweigegemeinschaft werden als klar getrennte Textstellen behandelt:
- Betriebszweigegemeinschaft: Zeilen entfernen (Seiteninhalte Milchproduktion & Über uns, SEO-Keyword).
- Fütterung: §4 Milchproduktion und §8 SEO-Keywords neu formulieren (3 Monate Silage/Industrie, 9 Monate Gras+Heu/Emmentaler).
*Grund:* Die Specs definieren pro Anforderung eigene Scenarien; getrennte Umsetzung macht die Prüfung je Scenario sauber nachvollziehbar.

**D4 – Partnerschaften als eigene, tabellarische Sektion**
In `README.md` neu: Einheitliche Partner-Tabelle (Name, Kurzbeschreibung, Link), eingebettet in Home-/Landingpage-Inhalt (§3/§4). Vier feste Zeilen.
*Grund:* Leicht pflegbar, klar abgrenzbar, entspricht der Scenario-Anforderung pro Partner.

**D5 – DESIGN_SYSTEM.md: Hero-Konzept, Sub-Branding, Anti-KI als neue/erweiterte Unterabschnitte**
- Hero-Konzept „Moderne Typo + Doodles" → Ergänzung in §5 (Formen & Flächen) oder eigener Unterabschnitt; ersetzt die implizite Vollbild-Hero-Annahme.
- Sub-Branding-Maskottchen → §9 Marken-Elemente um eine Zuordnungstabelle (Route → Maskottchen) plus Animierbarkeits-Hinweis erweitern.
- Anti-KI-Prinzipien → §2 Visuelle Design-Prinzipien erweitern.
- Farbpalette → §3 um Anpassungsfähigkeits-Vermerk ergänzen (Tokens bleiben).
*Grund:* Bleibt im bestehenden Kapitel-Zuschnitt; Design-System bleibt die einzige Referenz.

## Risks / Trade-offs

- [Wordmark-Umbenennung könnte technische Stellen (Domains, Route-Slugs, Footer) einzeln betreffen] → Manuelle Verifikation statt Massentausch (D2); unsichere Fälle als offene Frage dokumentieren statt raten.
- [Inhaltliche Korrektur Fütterung könnte versehentlich andere Abschnitte (z. B. Werte/Transparenz) widersprechen] → Konsistenz-Check am Ende über beide Dokumente.
- [Antikonsistenz zwischen README-Content und Design-System-Design] → letzter Umsetzungsschritt ist ein Abgleich-Szenario über beide Dateien.
