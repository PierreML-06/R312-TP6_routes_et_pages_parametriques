export const jeux = [
  { slug: "manchots", titre: "Manchots", description: "Mesures du bec de 344 manchots de l'archipel Palmer.", graphique: "Nuage de points", parametre: "espèce", liens: { onglets: "/manchots", dynamique: "/rendu-dynamique", statique: "/rendu-statique" } },
  { slug: "voitures", titre: "Voitures", description: "Puissance et consommation de modèles des années 70-80.", graphique: "Nuage de points", parametre: "cylindres", liens: { onglets: "/voitures", dynamique: "/voitures/rendu-dynamique", statique: "/voitures/rendu-statique" } },
  { slug: "marches", titre: "Marchés", description: "Cours de clôture de grandes actions technologiques.", graphique: "Courbe et aire", parametre: "action", liens: { onglets: "/marches", dynamique: "/marches/rendu-dynamique", statique: "/marches/rendu-statique" } },
  { slug: "climat", titre: "Climat", description: "Anomalie de température mondiale depuis 1880.", graphique: "Barres divergentes", parametre: "décennie", liens: { onglets: "/climat", dynamique: "/climat/rendu-dynamique", statique: "/climat/rendu-statique" } },
  { slug: "athletes", titre: "Athlètes", description: "Taille des athlètes des Jeux olympiques de Rio 2016.", graphique: "Histogramme", parametre: "sport", liens: { onglets: "/athletes", dynamique: "/athletes/rendu-dynamique", statique: "/athletes/rendu-statique" } },
  { slug: "diamants", titre: "Diamants", description: "Prix de près de 54 000 diamants selon leur couleur.", graphique: "Barres groupées", parametre: "taille", liens: { onglets: "/diamants", dynamique: "/diamants/rendu-dynamique", statique: "/diamants/rendu-statique" } },
  { slug: "meteo", titre: "Météo", description: "Températures quotidiennes à Seattle, de 2012 à 2015.", graphique: "Carte de chaleur", parametre: "année", liens: { onglets: "/meteo", dynamique: "/meteo/rendu-dynamique", statique: "/meteo/rendu-statique" } },
];
/** Retrouve un jeu par son slug. */
export const trouverJeu = (slug) => jeux.find((j) => j.slug === slug);
