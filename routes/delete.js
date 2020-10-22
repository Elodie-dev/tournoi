// 1-CREATION DES DEPENDANCES DE MODULES
// MODULE DE JS.NODE
const mysql = require('mysql');
const express = require('express'); // APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

// IMPORT DES MODULES CREES
let db = require('../database'); // RECUPERE LES MODULES DE LA BASE DE DONNEES


// 2 - CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app = express.Router();
app.delete('/player/:id', function(req, res){
    
    const id = req.params.id;

            let supprJoueur = `DELETE FROM JOUEUR WHERE id_joueur = ${id}`
            // console.log(id);
            db.query(supprJoueur, (err, rows, fields) => {
                if(err){
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    let nbLignesSuppr = rows.affectedRows;
                    if(nbLignesSuppr == 0){
                        console.log(`${nbLignesSuppr} ligne supprimée : l'ID "${id}" n'existe pas`);
                        res.send(`${nbLignesSuppr} ligne supprimée : l'ID "${id}" n'existe pas`);
                    }
                    else{
                        console.log(`Le joueur "${req.body.nom_joueur}" a bien été supprimé`);
                        res.send(`Le joueur "${req.body.nom_joueur}" a bien été supprimé`);
                    }
                }
            })

});

app.delete('/stade/:id', function(req, res){
    
    const id = req.params.id;

            let supprStade = `DELETE FROM STADE WHERE id_stade = ${id}`
            // console.log(id);
            db.query(supprStade, (err, rows, fields) => {
                if(err){
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    let nbLignesSuppr = rows.affectedRows;
                    if(nbLignesSuppr == 0){
                        console.log(`${nbLignesSuppr} ligne supprimée : l'ID "${id}" n'existe pas`);
                        res.send(`${nbLignesSuppr} ligne supprimée : l'ID "${id}" n'existe pas`);
                    }
                    else{
                        console.log(`Le stade "${req.body.nom_stade}" a bien été supprimé`);
                        res.send(`Le stade "${req.body.nom_stade}" a bien été supprimé`);
                    }
                }
            })

});

module.exports = app;