# R312 – TP6 : routes et pages paramétriques (Astro)

Graphiques Observable Plot (rendus côté serveur avec jsdom) de sept jeux de données, avec Astro et Tailwind v4.

## Jeux de données

Le registre est dans `src/data/jeux.js` (accueil, menu de navigation et `ModeSwitch` en dépendent).

| Jeu | Graphique | Paramètre | Onglets | Dynamique (`prerender = false`) | Statique (`getStaticPaths`) |
|---|---|---|---|---|---|
| Manchots | Nuage de points | espèce | `/manchots` | `/rendu-dynamique/[espèce]` | `/rendu-statique/[espèce]` |
| Voitures | Nuage de points | cylindres | `/voitures` | `/voitures/rendu-dynamique/[cylindres]` | `/voitures/rendu-statique/[cylindres]` |
| Marchés | Courbe et aire | action | `/marches` | `/marches/rendu-dynamique/[action]` | `/marches/rendu-statique/[action]` |
| Climat | Barres divergentes | décennie | `/climat` | `/climat/rendu-dynamique/[décennie]` | `/climat/rendu-statique/[décennie]` |
| Athlètes | Histogramme | sport | `/athletes` | `/athletes/rendu-dynamique/[sport]` | `/athletes/rendu-statique/[sport]` |
| Diamants | Barres groupées | taille | `/diamants` | `/diamants/rendu-dynamique/[taille]` | `/diamants/rendu-statique/[taille]` |
| Météo | Carte de chaleur | année | `/meteo` | `/meteo/rendu-dynamique/[année]` | `/meteo/rendu-statique/[année]` |

L'accueil `/` présente tous les jeux, avec un aperçu du graphique et les trois liens de chacun.

## Commandes

- `npm install`
- `npm run dev`
- `npm run build`
