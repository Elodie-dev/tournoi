// 1 - CREATION DES DEPENDANCES DE MODULES
// MODULE DE JS.NODE
// const http = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqlApostrophe = require("mysql-apostrophe");

// IMPORT DES MODULES CREES
var dataBase = require('./database');

// RECUPERATION DES FICHIERS ROUTES DANS LE DOSSIER ROUTES
const lecture = require("./routes/read");
const creation = require("./routes/create");
const modifier = require("./routes/update");
const supprimer = require("./routes/delete");


app.use(cors());
// 2 - MISE EN PLACE DU BODY PARSER QUI PERMET DE LIRE LES JSON ET URL ENVOYE PAR LE FORMULAIRE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// UTILISATION DES ROUTES
app.use("/read", lecture);
// app.use("/routesread", lecture);
app.use("/create", creation);
app.use("/update", modifier);
app.use("/delete", supprimer);


// 3- MISE EN PLACE DE mysqlApostrophe
app.use(mysqlApostrophe); // PERMET D'INSERER DES CHAMPS CONTENANT DES APOSTROPHES


//------------------------------------------//
//  Lignes qui servent pour le déploiement  //
//------------------------------------------//
// 1°) Créer une contante qui reçoit le module path
const path = require('path'); 
// 2°) Préciser que Express va chercher des infos dans le dossiers build
app.use(express.static(path.join(__dirname, '/build')));
// app.use(express.static("public"));
// 3°) Préciser que Express va chercher des app en utilisant le préfixe "/""
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//------------------------------------------//
//    Fin des lignes pour le déploiement    //
//------------------------------------------//


// 4 - CHOIX DU PORT UTILISE PAR LE SERVEUR
const port = process.env.PORT || 3050; // RECUPERE UN PORT LIBRE SINON 3050
app.listen(port, function(){
    console.log("Ok ça marche");
    console.log("Le serveur utilise le port : " + port);
});