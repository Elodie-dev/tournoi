// 1-CREATION DES DEPENDANCES DE MODULES
// MODULE DE JS.NODE
const mysql = require('mysql');
const express = require('express'); // APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

// IMPORT DES MODULES CREES
let db = require('../database'); // RECUPERE LES MODULES DE LA BASE DE DONNEES
// let connection = mysql.createConnection(db); // VARIABLE QUI RECOIT LA CONNECTION A LA BDD

// 2 - CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app = express.Router();

// 3-MISE EN PLACE DES DIFFERENTS CREATE
// 3.1- TABLES SANS CLE(S) ETRANGERE(S)
// TABLE STADE
app.post('/newstade', function(req, res){
    let verifRequete = `SELECT * FROM STADE WHERE nom_stade="${req.body.nom_stade}"`
    db.query(verifRequete, (err, rows, fields) => {
        if(err){
            console.log(err.message);
            res.send(err.message);
        } else if (rows.length > 0) {
            res.send("La valeur saisie existe déjà")
        } else {
            let ajoutStade = `INSERT INTO STADE (nom_stade, adresse_stade, cp_stade, ville_stade, pays_stade) VALUES ('${req.body.nom_stade}', '${req.body.adresse_stade}', '${req.body.cp_stade}', '${req.body.ville_stade}', '${req.body.pays_stade}')`
            db.query(ajoutStade, (errTwo, rowsTwo, fieldsTwo) => {
                if(errTwo){
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                } else {

                    console.log(`Le stade "${req.body.nom_stade}" a bien été créée`);
                    res.send(`Le stade "${req.body.nom_stade}" a bien été créée`);
                    
                }
            })
        }
    })
});

app.post('/newplayer', function(req, res){
    let verifRequete = `SELECT * FROM JOUEUR WHERE nom_joueur="${req.body.nom_joueur}" AND prenom_joueur="${req.body.prenom_joueur}"`
    db.query(verifRequete, (err, rows, fields) => {
        if(err){
            console.log(err.message);
            res.send(err.message);
        } else if (rows.length > 0) {
            res.send("La valeur saisie existe déjà")
        } else {
            let ajoutJoueur = `INSERT INTO JOUEUR (nom_joueur, prenom_joueur, numero, date_naissance_joueur, id_poste, id_equipe) VALUES ('${req.body.nom_joueur}', '${req.body.prenom_joueur}', '${req.body.numero}', '${req.body.date_naissance_joueur}', '${req.body.id_poste}', '${req.body.id_equipe}')`
            db.query(ajoutJoueur, (errTwo, rowsTwo, fieldsTwo) => {
                if(errTwo){
                    console.log(errTwo.message);
                    res.send(errTwo.message);
                } else {
                    console.log(`Le joueur "${req.body.nom_joueur}", "${req.body.prenom_joueur}" a bien été créée`);
                    res.send(`Le joueur "${req.body.nom_joueur}", "${req.body.prenom_joueur}" a bien été créée`);
                }
            })
        }
    })
});

module.exports = app;