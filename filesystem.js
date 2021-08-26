const fs = require("fs");
const path = require("path");

console.log("Création du dossier toto");
fs.mkdirSync(path.join(__dirname,"toto"),{});
console.log("Le dossier est crée");
fs.mkdir(path.join(__dirname,"toto_async"),{},function(err){
    if(err) throw err;
    //rendu ici il n'y a pas d'erreur
    console.log("Le dossier a été créer");
});
console.log("Aurevoir");