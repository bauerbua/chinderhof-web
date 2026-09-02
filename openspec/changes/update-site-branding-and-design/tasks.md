## 1. Branding – Hofname Oberhusers im Code

- [x] 1.1 In `src/config/brand.ts` und `src/data/client.ts` `name` auf `'Oberhusers'` setzen; verifizieren, dass `brand.name` und `client.name` „Oberhusers" sind und Header/Footer/Meta den Namen dynamisch anzeigen
- [x] 1.2 Default-Props und sichtbare Texte in `Hero.astro`, `About.astro`, `AngebotsGrid.astro`, `Spicker.astro`, `AnmeldeFormular.astro` (Log) und `index.astro` von „Chinderhof" auf „Oberhusers" umstellen; verifizieren, dass `rg -i "chinderhof" src` keine sichtbaren Text-/Default-Stellen mehr findet (ausser den bewusst ausgenommenen)
- [x] 1.3 Kommentare in `src/config/images.ts`, `src/content.config.ts`, `src/styles/theme.css` sowie Umlagerungs-/Texthinweise in `src/config/umzug.ts` und `src/components/UmzugHinweis.astro` aktualisieren; verifizieren, dass keine veraltete „Chinderhof"-Referenz in Kommentaren/Texten verbleibt
- [x] 1.4 `package.json`-Name, `brand.url`, `client.domain` und E-Mail bewusst unverändert lassen; verifizieren, dass diese Stellen nicht angefasst wurden (Gilt als bewusste Ausnahme)

## 2. Inhaltliche Korrekturen – Betriebszweigegemeinschaft & Fütterung

- [x] 2.1 Aus `src/content/angebote/milchproduktion.md`, `src/content/angebote/ackerbau.md`, `src/pages/ueber-uns.astro` und `src/components/About.astro` alle Erwähnungen der Betriebszweigegemeinschaft und der Familie Scheidegger entfernen; verifizieren, dass `rg -i "Betriebszweigegemeinschaft|Scheidegger" src` 0 Treffer in sichtbaren Inhalten liefert
- [x] 2.2 In `src/content/angebote/milchproduktion.md` und `src/pages/ueber-uns.astro` den Fütterungszyklus korrekt beschreiben (9 Monate Gras/Heu → Rohmilch für Emmentaler AOP; 3 Monate Winter-Silage wegen Futter-/Lagermöglichkeiten → Milch in den Industriekanal); verifizieren, dass beide Phasen klar und widerspruchsfrei stehen (kein falsches „Heu im Winter" pauschal)

## 3. Sub-Branding-Maskottchen

- [x] 3.1 In `src/components/Icon.astro` neue Strich-Icons `dog` (Berner Sennenhund), `clover` (Kleeblatt) und `potato` (Kartoffel) im bestehenden Stil ergänzen; verifizieren, dass `icons.dog`, `icons.clover`, `icons.potato` existieren und je einzeln adressierbare Pfade enthalten (SVG/JS-animierbar, `IconName`-Typ erweitert)
- [x] 3.2 Mapping Route → Maskottchen anlegen (freilandeier: Huhn, milchproduktion: Kuh, ackerbau: Kartoffel/Weizen/Mais, kinderprogramm: Berner Sennenhund, `/` & über-uns: Kleeblatt/Ensemble), zentral in einer Konstante; verifizieren, dass alle 5 Zuordnungen vorhanden sind
- [x] 3.3 Sub-Branding-Maskottchen auf den jeweiligen Seiten einbinden (Header-Begrüssung / Seiten-Kopf je Angebotsseite und Über-uns/Home); verifizieren, dass auf jeder Zielroute das korrekte Maskottchen angezeigt wird

## 4. Typo-Hero & Partnerschaften

- [x] 4.1 `Hero.astro` so anpassen, dass eine grosse Fraunces-Headline auf hellem Grund im Vordergrund steht und das Bild zur optionalen kleinen Bildkarte wird (kein Full-Screen-Vollbild-Overlay); in `index.astro` den Hero entsprechend konfigurieren; verifizieren, dass die Headline dominiert und kein abgedunkeltes Vollbild-Foto Standard ist
- [x] 4.2 Mindestens einen handgezeichneten Doodle-/Maskottchen-Akzent (z. B. unterstrichener Begriff) im Hero ergänzen; verifizieren, dass ein spielerischer, handgezeichneter Akzent sichtbar ist
- [x] 4.3 Neue Komponente `src/components/Partnerschaften.astro` erstellen, die die 4 Partner (Stallvisite, IP-Suisse, SEMAG, Emmentaler AOP) mit Kurzbeschreibung und korrektem Link rendert (externe Links mit `target="_blank" rel="noopener noreferrer"`); in `index.astro` einbinden; verifizieren, dass alle 4 Partner + korrekte URLs sichtbar sind

## 5. TrustBar & Konsistenz

- [x] 5.1 TrustBar-Signale in `src/components/TrustBar.astro` (Default) und `src/pages/index.astro` (Props) auf korrekte Aussagen stellen (z. B. Weidegang im Sommer, Gras & Heu → Emmentaler AOP, Winter-Silage, Freilandeier) mit passenden Icons; verifizieren, dass keine falsche Winter-Heufütterungs-Pauschale enthalten ist und jedes Signal ein Icon hat
- [x] 5.2 Konsistenz-Scan über den gesamten Code: sichtbarer Name durchgängig „Oberhusers", keine Betriebszweigegemeinschaft, korrekter Fütterungszyklus, `prefers-reduced-motion: reduce` für allfällige neue Animationen; verifizieren, dass `npm run build` fehlerfrei durchläuft und die Seite gerendert werden kann
