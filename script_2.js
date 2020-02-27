let answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
let y = answer;
let x = 1;
for(let count = -1; count = y; count++){
  x *= y;
  y -=1;
}
console.log(`Voici la factorielle de ${answer} : ${x}`)
