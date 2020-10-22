-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 09 sep. 2020 à 14:39
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `tournoi_foot_national`
--

-- --------------------------------------------------------

--
-- Structure de la table `EQUIPE`
--

CREATE TABLE `EQUIPE` (
  `id_equipe` int(4) NOT NULL,
  `nom_equipe` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `EQUIPE`
--

INSERT INTO `EQUIPE` (`id_equipe`, `nom_equipe`) VALUES
(1, 'France'),
(2, 'Angleterre'),
(3, 'Espagne');

-- --------------------------------------------------------

--
-- Structure de la table `JOUER`
--

CREATE TABLE `JOUER` (
  `id_equipe` int(4) NOT NULL,
  `id_match` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `JOUER`
--

INSERT INTO `JOUER` (`id_equipe`, `id_match`) VALUES
(1, 1),
(2, 1),
(3, 2),
(1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `JOUEUR`
--

CREATE TABLE `JOUEUR` (
  `id_joueur` int(4) NOT NULL,
  `nom_joueur` varchar(255) NOT NULL,
  `prenom_joueur` varchar(255) NOT NULL,
  `numero` int(4) NOT NULL,
  `date_naissance_joueur` date NOT NULL,
  `id_poste` int(4) NOT NULL,
  `id_equipe` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `JOUEUR`
--

INSERT INTO `JOUEUR` (`id_joueur`, `nom_joueur`, `prenom_joueur`, `numero`, `date_naissance_joueur`, `id_poste`, `id_equipe`) VALUES
(1, 'ROONEY', 'Wayne', 10, '1985-10-24', 3, 2),
(2, 'MBAPPÉ', 'Kylian', 7, '1998-12-20', 3, 1),
(3, 'RAMOS', 'Sergio', 4, '1986-03-30', 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `MATCH`
--

CREATE TABLE `MATCH` (
  `id_match` int(4) NOT NULL,
  `nom_match` varchar(255) NOT NULL,
  `id_tournoi` int(4) NOT NULL,
  `id_stade` int(4) NOT NULL,
  `date_match` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `MATCH`
--

INSERT INTO `MATCH` (`id_match`, `nom_match`, `id_tournoi`, `id_stade`, `date_match`) VALUES
(1, 'France - Angleterre', 2, 3, '2021-06-21'),
(2, 'Espagne - France', 2, 2, '2021-06-25');

-- --------------------------------------------------------

--
-- Structure de la table `PARTICIPER`
--

CREATE TABLE `PARTICIPER` (
  `id_equipe` int(4) NOT NULL,
  `id_tournoi` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `POSTE`
--

CREATE TABLE `POSTE` (
  `id_poste` int(4) NOT NULL,
  `nom_poste` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `POSTE`
--

INSERT INTO `POSTE` (`id_poste`, `nom_poste`) VALUES
(1, 'Défenseur'),
(2, 'Gardien'),
(3, 'Attaquant');

-- --------------------------------------------------------

--
-- Structure de la table `STADE`
--

CREATE TABLE `STADE` (
  `id_stade` int(4) NOT NULL,
  `nom_stade` varchar(255) NOT NULL,
  `adresse_stade` varchar(255) NOT NULL,
  `cp_stade` varchar(7) NOT NULL,
  `ville_stade` varchar(255) NOT NULL,
  `pays_stade` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `STADE`
--

INSERT INTO `STADE` (`id_stade`, `nom_stade`, `adresse_stade`, `cp_stade`, `ville_stade`, `pays_stade`) VALUES
(1, 'Parc des Princes', '24 Rue du Commandant Guilbaud', '75016', 'Paris', 'France'),
(2, 'Stade de France', 'Stade de France', '93200', 'Saint-Denis', 'France'),
(3, 'Old Trafford', 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester', 'M16 0RA', 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester', 'Angleterre'),
(4, 'Stade Santiago-Bernabéu', 'Av. de Concha Espina', '28036', 'Madrid', 'Espagne');

-- --------------------------------------------------------

--
-- Structure de la table `TOURNOI`
--

CREATE TABLE `TOURNOI` (
  `id_tournoi` int(4) NOT NULL,
  `nom_tournoi` varchar(255) NOT NULL,
  `date_deb_tournoi` date NOT NULL,
  `date_fin_tournoi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `TOURNOI`
--

INSERT INTO `TOURNOI` (`id_tournoi`, `nom_tournoi`, `date_deb_tournoi`, `date_fin_tournoi`) VALUES
(1, 'Coupe du Monde', '2022-11-21', '2022-12-22'),
(2, 'UEFA EURO 2020', '2021-06-11', '2021-07-11');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `EQUIPE`
--
ALTER TABLE `EQUIPE`
  ADD PRIMARY KEY (`id_equipe`);

--
-- Index pour la table `JOUER`
--
ALTER TABLE `JOUER`
  ADD KEY `JOUER_fk0` (`id_equipe`),
  ADD KEY `JOUER_fk1` (`id_match`);

--
-- Index pour la table `JOUEUR`
--
ALTER TABLE `JOUEUR`
  ADD PRIMARY KEY (`id_joueur`),
  ADD KEY `JOUEUR_fk0` (`id_poste`),
  ADD KEY `JOUEUR_fk1` (`id_equipe`);

--
-- Index pour la table `MATCH`
--
ALTER TABLE `MATCH`
  ADD PRIMARY KEY (`id_match`),
  ADD KEY `MATCH_fk0` (`id_tournoi`),
  ADD KEY `MATCH_fk1` (`id_stade`);

--
-- Index pour la table `PARTICIPER`
--
ALTER TABLE `PARTICIPER`
  ADD KEY `PARTICIPER_fk0` (`id_equipe`),
  ADD KEY `PARTICIPER_fk1` (`id_tournoi`);

--
-- Index pour la table `POSTE`
--
ALTER TABLE `POSTE`
  ADD PRIMARY KEY (`id_poste`);

--
-- Index pour la table `STADE`
--
ALTER TABLE `STADE`
  ADD PRIMARY KEY (`id_stade`),
  ADD UNIQUE KEY `nom_stade` (`nom_stade`);

--
-- Index pour la table `TOURNOI`
--
ALTER TABLE `TOURNOI`
  ADD PRIMARY KEY (`id_tournoi`),
  ADD UNIQUE KEY `nom_tournoi` (`nom_tournoi`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `EQUIPE`
--
ALTER TABLE `EQUIPE`
  MODIFY `id_equipe` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `JOUEUR`
--
ALTER TABLE `JOUEUR`
  MODIFY `id_joueur` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `MATCH`
--
ALTER TABLE `MATCH`
  MODIFY `id_match` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `POSTE`
--
ALTER TABLE `POSTE`
  MODIFY `id_poste` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `STADE`
--
ALTER TABLE `STADE`
  MODIFY `id_stade` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `TOURNOI`
--
ALTER TABLE `TOURNOI`
  MODIFY `id_tournoi` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `JOUER`
--
ALTER TABLE `JOUER`
  ADD CONSTRAINT `JOUER_fk0` FOREIGN KEY (`id_equipe`) REFERENCES `EQUIPE` (`id_equipe`),
  ADD CONSTRAINT `JOUER_fk1` FOREIGN KEY (`id_match`) REFERENCES `MATCH` (`id_match`);

--
-- Contraintes pour la table `JOUEUR`
--
ALTER TABLE `JOUEUR`
  ADD CONSTRAINT `JOUEUR_fk0` FOREIGN KEY (`id_poste`) REFERENCES `POSTE` (`id_poste`),
  ADD CONSTRAINT `JOUEUR_fk1` FOREIGN KEY (`id_equipe`) REFERENCES `EQUIPE` (`id_equipe`);

--
-- Contraintes pour la table `MATCH`
--
ALTER TABLE `MATCH`
  ADD CONSTRAINT `MATCH_fk0` FOREIGN KEY (`id_tournoi`) REFERENCES `TOURNOI` (`id_tournoi`),
  ADD CONSTRAINT `MATCH_fk1` FOREIGN KEY (`id_stade`) REFERENCES `STADE` (`id_stade`);

--
-- Contraintes pour la table `PARTICIPER`
--
ALTER TABLE `PARTICIPER`
  ADD CONSTRAINT `PARTICIPER_fk0` FOREIGN KEY (`id_equipe`) REFERENCES `EQUIPE` (`id_equipe`),
  ADD CONSTRAINT `PARTICIPER_fk1` FOREIGN KEY (`id_tournoi`) REFERENCES `TOURNOI` (`id_tournoi`);
