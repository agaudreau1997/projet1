
console.log("Bonjour tout le monde");

const personne = require("./personne");
console.log("Salut "+personne.nom);
console.log("Tu as "+ personne.age + " ans");
const total = personne.age +1;
console.log(`Tu vas avoir ${total} ans`);