let nbEtage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let etageMax = nbEtage;
let etage = 0;
let hash = "#";
let space = " ";
parseInt(nbEtage);
for(etage; etage <= etageMax; etage++){
  console.log(space.repeat(nbEtage), hash.repeat(etage))
  nbEtage -= 1
}