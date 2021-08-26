
console.log("Bonjour tout le monde");

const personne = require("./personne");
console.log("Salut "+personne.nom);
console.log("Tu as "+ personne.age + " ans");
const total = personne.age +1;
console.log(`Tu vas avoir ${total} ans`);

const Personne = require("./classePersonne");

const paul = new Personne("Paul Larue", 38);
paul.salutation();
const alain = new Personne("Alain Pilon", 22);
alain.salutation();