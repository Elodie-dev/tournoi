// 1-CREATION DES DEPENDANCES DE MODULES
// MODULE DE JS.NODE
const mysql = require('mysql');
const express = require('express'); // APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

// IMPORT DES MODULES CREES
let db = require('../database'); // RECUPERE LES MODULES DE LA BASE DE DONNEES


// 2 - CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app = express.Router();

app.put('/player/:id', function(req, res){
    
    const id = req.params.id;

            let modifJoueur = `UPDATE JOUEUR
            SET nom_joueur = "${req.body.nom_joueur}", prenom_joueur = "${req.body.prenom_joueur}", numero = "${req.body.numero}", date_naissance_joueur = "${req.body.date_naissance_joueur}", id_poste = "${req.body.id_poste}", id_equipe = "${req.body.id_equipe}" WHERE id_joueur = ${id}`
            console.log(id);
            db.query(modifJoueur, (err, rows, fields) => {
                if(err){
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    let nbLignesModif = rows.affectedRows;
                    if(nbLignesModif == 0){
                        console.log(`${nbLignesModif} ligne modifiée : l'ID "${id}" n'existe pas`);
                        res.send(`${nbLignesModif} ligne modifiée : l'ID "${id}" n'existe pas`);
                    }
                    else{
                        console.log(`Le joueur "${req.body.nom_joueur}" a bien été modifié`);
                        res.send(`Le joueur "${req.body.nom_joueur}" a bien été modifié`);
                    }
                }
            })

});

app.put('/stade/:id', function(req, res){
    
    const id = req.params.id;

            let modifStade = `UPDATE STADE
            SET nom_stade = "${req.body.nom_stade}", adresse_stade="${req.body.adresse_stade}", cp_stade="${req.body.cp_stade}", ville_stade="${req.body.ville_stade}", pays_stade = "${req.body.pays_stade}" WHERE id_stade = ${id}`
            db.query(modifStade, (err, rows, fields) => {
                if(err){
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    let nbLignesModif = rows.affectedRows;
                    if(nbLignesModif == 0){
                        console.log(`${nbLignesModif} ligne modifiée : l'ID "${id}" n'existe pas`);
                        res.send(`${nbLignesModif} ligne modifiée : l'ID "${id}" n'existe pas`);
                    }
                    else{
                        console.log(`Le stade "${req.body.nom_stade}" a bien été modifié`);
                        res.send(`Le stade "${req.body.nom_stade}" a bien été modifié`);
                    }
                }
            })

});





module.exports = app;