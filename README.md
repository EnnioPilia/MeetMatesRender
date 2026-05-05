﻿# MEET MATES

## LIVE DEMO

L’application Meet Mates est actuellement déployée en ligne via Render.

[Voir la démo](https://meetmates-1.onrender.com)

---

###  IMPORTANT

Ce déploiement est une version de démonstration du projet.

Les performances peuvent varier car l’application est hébergée sur une infrastructure gratuite (Render Free Tier).

Le projet reste entièrement fonctionnel en local via la section Installation ci-dessous.

---

## PRESENTATION

**Meet Mates** est une application web permettant aux utilisateurs de découvrir, organiser et participer  
à des activités variées afin de rencontrer de nouvelles personnes et partager des moments de convivialité .

Les utilisateurs peuvent :
- Consulter des événements publiés par la communauté
- Participer à des activités existantes
- Créer et gérer ses propres annonces afin d’inviter d’autres membres
  
Projet initié dans le cadre de la formation **Concepteur Développeur d’Applications (CDA)** 

---

## FONCTIONNALITÉS

###  Utilisateur
- Inscription & authentification sécurisée (JWT + cookies HTTP-only)
- Gestion du profil utilisateur
- Suppression du compte (soft delete / hard delete)
- Création et participation aux événements
- Modification et suppression d’annonces
- Recherche et filtrage des activités

###  Administration
- Interface d’administration dédiée
- Gestion des utilisateurs  (désactivation ou bannissement de comptes)
- Modéreration des événements (suppression / désactivation)

---

## TECHNOLOGIES UTILISÉES

### Front-end
- Angular (RxJS, Signals)
- TypeScript
- Tailwind CSS
- Angular Material

### Back-end
- Spring Boot
- Java
- Persistance des données via JPA / Hibernate (ORM)
- Spring Security
- Apache Maven

### Bases de données
- MySQL
- Flyway

### Outils & DevOps
- Git / GitHub
- Render (déploiement / hébergement)
- Postman
- Figma
  
---

## ARCHITECTURE

### Front-end
**SPA Angular** avec Standalone Components

Architecture modulaire en couches (core, features, shared) :
- Services & Facades : abstraction de la logique métier
- Guards : contrôle d’accès côté UX
- Interceptors : gestion centralisée des requêtes HTTP et des credentials
- Components features & shared : pour l’affichage UI

### Back-end
**API REST stateless Spring Boot** 

Architecture modulaire par domaine métier (auth, user, event...) :
- Controllers : exposition des endpoints REST
- Services : logique métier
- Repositories : accès aux données via JPA
- DTO & Mappers : découplage des modèles internes / externes
  
Services transverses :
- Gestion centralisée des erreurs (DTO standardisés)
- Centralisation des messages applicatifs
- Gestion des emails (Spring Mail + Thymeleaf)

### Base de données
- **MySQL** : Modélisation relationnelle des entités métier
- **Flyway** : Versioning et exécution automatique des migrations de base de données

---

## SECURITE
Authentification basée sur **JWT** :
- JWT stocké en **cookies HTTP-only**
- Durée de vie courte de l’access token
- **Refresh tokens** avec rotation
  
Sécurisation de l’API :
- Protection via **Spring Security**
- API **Stateless** (aucune session côté serveur)
- Configuration CORS sécurisée 
- Contrôle des accès basé sur les rôles (USER / ADMIN)
  
Protection des entrées :
- Utilisation de l'ORM **JPA / Hibernate** avec requêtes paramétrées (réduction des risques d’injection SQL)
- Validation des données via les **Bean Validation** et les **DTO**

Protection des données sensibles :
- Hashage des mots de passe
- Utilisation de variables d’environnement
- Aucune donnée sensible exposée côté client

---
    
## UI & UX

Le front-end a été développé avec :

- **Angular Material** pour garantir une cohérence visuelle, une bonne accessibilité et des composants UI robustes, 
conformes aux standards (navigation clavier, gestion du focus, contrastes) et reposant sur une structuration sémantique adaptée.

- **Tailwind CSS** pour la mise en page et le responsive. L’interface est ensuite adaptée aux écrans tablette et desktop grâce aux breakpoints Tailwind, 
complétés ponctuellement par des **media queries personnalisées** lorsque nécessaire.

---

## INSTALLATION

```bash
git clone https://github.com/EnnioPilia/MeetMatesRender.git
cd MeetMatesRender
```

### Prérequis
- Node.js >= 22
- Angular CLI >= 19
- Java JDK 17+
- Maven
- MySQL
- Docker (optionnel)

### Installation du back-end

```bash
cd MeetMatesBACK
mvn clean install
```

### Variables d’environnement

Les données sensibles ne sont pas stockées en dur.

Les fichiers application.properties utilisent uniquement
des variables d’environnement système.

```env
DB_URL=jdbc:mysql://localhost:3306/meetmates
DB_USER=your_db_user
DB_PASS=your_db_password
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:4200
```

###  Lancer le back-end

```bash
mvn spring-boot:run
```

### API accessible à l’adresse :

http://localhost:8080

---

### Installation du front-end
```bash
cd MeetMatesFRONT
npm install
```

###  Lancer le front-end
```bash
ng serve
```

### Application accessible à l’adresse :

http://localhost:4200

---

##  TESTS

###  Stratégie de tests
- Tests unitaires front : Angular (Jasmine / Karma)
- Tests unitaires et d’intégration back : JUnit 5, Mockito
- Tests de sécurité : Spring Security Test
- Base de données H2 pour les tests

### Lancer les tests

#### Front-end
```bash
ng test
```

#### Back-end
```bash
mvn test
```

--- 

## CI / CD

Le projet utilise :

- **GitHub Actions** pour l’intégration continue (CI)
  - build backend Spring Boot
  - build frontend Angular
  - exécution des tests

- **Render** pour le déploiement continu (CD)
  - déploiement automatique à chaque push sur la branche `main`
  - build Docker du backend Spring Boot

### Déploiement

Le backend est déployé automatiquement sur Render via le repository GitHub :
https://github.com/EnnioPilia/MeetMatesRender

La branche surveillée est : `main`
## Conclusion

Ce projet met l’accent sur :
- la **sécurité** des échanges 
- la **maintenabilité** du code grâce à une architecture claire et modulaire
- l’utilisation de **technologies modernes full-stack** 
- une **expérience utilisateur fluide et accessible**, pensée dès la conception

Meet Mates a été conçu comme une application évolutive, pouvant être enrichie
de nouvelles fonctionnalités et déployée dans un environnement professionnel

---

## Auteur

PILIA Ennio
 Développeur Fullstack 


