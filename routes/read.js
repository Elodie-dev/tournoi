// 1-CREATION DES DEPENDANCES DE MODULES
// MODULE DE JS.NODE
const mysql = require('mysql'); //APPEL DU MODULE MYSQL QUI PERMET D'AGIR SUR UNE BASE DE DONNEES
const express = require('express'); // APPEL DU MODULE PERMETTANT DE FAIRE LA ROUTE

// IMPORT DES MODULES CREES
let db = require('../database'); // RECUPERE LES MODULES DE LA BASE DE DONNEES
// let connection = mysql.createConnection(db); // VARIABLE QUI RECOIT LA CONNECTION A LA BDD

// 2 - CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS server.js
const app = express.Router();

// TABLE PRIOROTE
app.get('/allstadium', function(req, res){
    let selectionPriorite = `SELECT * FROM STADE`
    // la requete renverra soit une erreur "err" soit un résultat "row" qui contient caque ligne d'enregistrée
    db.query(selectionPriorite, (err, rows, fields) => {
        if(err){
            res.send(err.message);
        }
        else {
            res.send(rows);
        }
    })
});
app.get('/allstadium/:id', function(req, res){
    const id = req.params.id;
    let selectionPriorite = `SELECT * FROM STADE WHERE id_stade=${id}`
    // la requete renverra soit une erreur "err" soit un résultat "row" qui contient caque ligne d'enregistrée
    db.query(selectionPriorite, (err, rows, fields) => {
        if(err){
            res.send(err.message);
        }
        else {
            res.send(rows);
        }
    })
});

app.get('/allplayers', function(req, res){
    let requete = `SELECT id_joueur, nom_joueur, prenom_joueur, numero, DATE_FORMAT(date_naissance_joueur, '%d/%m/%Y') AS date_naissance_joueur, nom_equipe, nom_poste FROM JOUEUR as J INNER JOIN EQUIPE AS E ON J.id_equipe = E.id_equipe
    INNER JOIN POSTE AS P ON J.id_poste = P.id_poste
    ORDER BY id_joueur ASC`
    // la requete renverra soit une erreur "err" soit un résultat "row" qui contient caque ligne d'enregistrée
    db.query(requete, (err, rows, fields) => {
        if(err){
            res.send(err.message);
        }
        else {
            res.send(rows);
        }
    })
});

app.get('/allpostes', function(req, res){
    let requete = `SELECT * FROM POSTE`
    // la requete renverra soit une erreur "err" soit un résultat "row" qui contient caque ligne d'enregistrée
    db.query(requete, (err, rows, fields) => {
        if(err){
            res.send(err.message);
        }
        else {
            res.send(rows);
        }
    })
});

app.get('/allequipes', function(req, res){
    let requete = `SELECT * FROM EQUIPE`
    // la requete renverra soit une erreur "err" soit un résultat "row" qui contient caque ligne d'enregistrée
    db.query(requete, (err, rows, fields) => {
        if(err){
            res.send(err.message);
        }
        else {
            res.send(rows);
        }
    })
});

module.exports = app;