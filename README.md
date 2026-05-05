# MEETMATES 
Application web permettant aux utilisateurs de découvrir, créer et gérer des événements au sein d’une plateforme communautaire.

---

### Live Demo

L’application MeetMates est actuellement déployée en ligne via Render.

[Voir la démo](https://meetmates-1.onrender.com)

---

###  Important

Ce déploiement est une version de démonstration du projet.

Les performances peuvent varier car l’application est hébergée sur une infrastructure gratuite (Render Free Tier).

Le projet reste entièrement fonctionnel en local via la section Installation ci-dessous.

---

## PRESENTATION

**Meet Mates** est une application web permettant aux utilisateurs de découvrir, organiser et participer  
à des activités variées afin de rencontrer de nouvelles personnes et partager des moments de convivialité.

Les utilisateurs peuvent :
- Consulter des événements publiés par la communauté
- Participer à des activités variées
- Organiser leurs propres rencontres
  
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
- Modération des événements (suppression / désactivation)

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
- PostgreSQL 
- Flyway

### Outils & DevOps
- Git / GitHub
- GitHub Actions (CI)
- Render (CD)
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
- **PostgreSQL** : Modélisation relationnelle des entités métier
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
complétés ponctuellement par des media queries personnalisées lorsque nécessaire.

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
- PostgreSQL

### Installation du back-end

```bash
cd MeetMatesBACK
mvn clean install
```

### Variables d’environnement

Les données sensibles ne sont pas stockées en dur.

Les fichiers `application.properties` utilisent uniquement
des variables d’environnement système.

```env
DB_URL=jdbc:postgresql://localhost:5432/meetmates
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

Le projet met en place une pipeline complète d’intégration et de déploiement continus afin d’assurer la qualité du code et automatiser les mises en production.

### Intégration Continue (CI)

La CI est assurée par **GitHub Actions**, avec un workflow déclenché automatiquement à chaque push sur la branche `main` et à chaque `Pull Request`.

#### Back-end (Spring Boot) :
- Build du projet via Maven (`mvn clean verify`)
- Exécution des tests unitaires et d’intégration
- Utilisation d’une base **H2 en mémoire** pour les tests
- Profil test activé pour isoler la configuration
  
#### Front-end (Angular) :
- Installation des dépendances (`npm install`)
- Exécution des tests via **Karma / Chrome Headless**
- Mode non interactif (`--watch=false`) pour CI

### Déploiement Continu (CD)

Le déploiement est automatisé via **Render** :
- Déploiement déclenché automatiquement à chaque push sur `main`
- Build du backend via Docker
- Exposition du service sur le port 8080
  
---

## CONTAINERISATION

Le backend est packagé via un `Dockerfile`.

L’image est construite automatiquement par Render lors du déploiement.

Le Dockerfile utilise une approche **multi-stage** :
- Une étape de build avec Maven
- Une étape d’exécution avec une image Java légère

Cette approche permet de réduire la taille de l’image finale et de garantir un environnement d’exécution reproductible.

---

## Conclusion

Ce projet met l’accent sur :
- La **sécurité** des échanges 
- La **maintenabilité** du code grâce à une architecture claire et modulaire
- L’utilisation de **technologies modernes full-stack** 
- Une **expérience utilisateur fluide et accessible**, pensée dès la conception

Meet Mates a été conçu comme une application évolutive, pouvant être enrichie
de nouvelles fonctionnalités et déployée dans un environnement professionnel

---

## Auteur

PILIA Ennio
 Développeur Fullstack 


