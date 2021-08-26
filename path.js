const path = require("path");

//console.log("Affichage de path.basename ", path.basename("c:\\users\\truc.html"));
console.log("Affiche path.filename: \t\t\t",__filename);   //donne le chemin du fichier complet
console.log("Affichage path.dirname: \t\t",__dirname);     //donne le chemin de dossier complet
console.log("utilisation de path.basename: \t\t", path.basename(__filename));
console.log("utilisation de path.basename sans le .js: ", path.basename(__filename, ".js"));
console.log("Utilisattoin de path.extname: \t\t", path.extname(__filename));
console.log("utilisation de path.dirname: \t\t",path.dirname("c\\users\\truc.html"));
console.log("utilisation de path.dirname: \t\t",path.dirname(__filename));
console.log("Utilisation de path.parse",path.parse(__filename));
console.log("Utilisation de path.parse.root",path.parse(__filename).root);
console.log("Utilisation de path.parse.ext",path.parse(__filename).ext);
console.log("Construciton d'un path: ", path.join(__dirname,"data", 'alex.json'));