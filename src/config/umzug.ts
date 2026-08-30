/**
 * Umzug & Zusammenschluss zweier Betriebe (siehe MIGRATION.md).
 *
 * Vor Go-Live eintragen:
 *   oldDomain         → alte Domain (nur für Dokumentation, kein Code-Verweis)
 *   oldBetriebName    → Name des zusammengelegten Betriebs / der Familie
 *   altStandort       → bisheriger Standort (z. B. „in der Nachbargemeinde")
 * Danach „aktiv: true".
 */
export const umzug = {
  aktiv: false,

  oldDomain: 'https://ALTEBETRIEB.example',
  oldBetriebName: 'Familie <Nachname>',
  altStandort: 'aus der Nachbargemeinde',

  hinweis:
    'Der Betrieb ist umgezogen und wird ab jetzt am Chinderhof weitergeführt – eure Kund:innen sind uns herzlich willkommen!',
  ueberUnsTitel: 'So ist der Chinderhof entstanden',
};