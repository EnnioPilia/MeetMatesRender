# MEET MATES

## LIVE DEMO

L’application Meet Mates est actuellement déployée en ligne via Render.

[Voir la démo](https://meetmates-1.onrender.com)

---

###  Important

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
- Créer leurs propres annonces afin d’inviter d’autres membres
  
Projet initié dans le cadre de la formation **Concepteur Développeur d’Applications (CDA)** 

---

## FONCTIONNALITÉS

###  Utilisateur
- Création de compte
- Authentification sécurisée (JWT + cookies HTTP-only)
- Gestion du profil utilisateur
- Suppression du compte (soft delete / hard delete)
- Consultation des événements (organisés participe
- Recherche et filtrage des activités
- Création et participation aux événements
- Modification et suppression d’annonces
- Centralisation des messages (succès/erreurs) côté back-end
- Affichage dynamique des messages via des notifications snackbar côté front-end

###  Administration
- Interface d’administration dédiée
- Gestion des utilisateurs  (désactivation ou bannissement de comptes)
- Modéreration des événements (suppression / désactivation)
- Protection des routes administrateur

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
- MySQL

### Outils & DevOps
- Git / GitHub
- GitHub Actions (CI/CD)
- Docker
- Maven
- Postman

---

## ARCHITECTURE

- **Frontend** : SPA Angular (Standalone Components, RxJS et Signals)
- **Backend** : API REST stateless Spring Boot
- **Base de données** : MySQL
- **Authentification**
  - JWT stocké en cookies HTTP-only
  - Refresh token
  - Sécurisation via Spring Security

### Back-end
- Controllers
- Services
- Repositories
- DTO / Mappers

### Front-end
- Services 
- Facades 
- Guards
- Interceptors
- Components shared & Features modulaires

---

## Sécurité
- Authentification JWT
- Cookies HTTP-only
- Gestion des tokens (expiration, refresh sécurisé)
- Rôles User / Admin
- Protection des routes (Spring Security, Guards Angular)
- Validation des données (frontend / backend)
- Configuration CORS sécurisée
- Variables sensibles via variables d’environnement
- Aucune clé sensible exposée côté client

---
    
## UI & UX

Le front-end a été développé selon une approche **mobile-first**, en combinant **Angular Material** pour garantir
une cohérence visuelle, une bonne accessibilité, des composants UI robustes, 
conformes aux standards (navigation clavier, gestion du focus, contrastes) et une structuration sémantique adaptée.

**Tailwind CSS** pour la mise en page et le responsive. L’interface est ensuite adaptée aux écrans tablette et desktop 
grâce aux breakpoints Tailwind, complétés ponctuellement par des **media queries personnalisées** lorsque nécessaire.

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

## Installation du back-end

```bash
cd MeetMatesBACK
mvn clean install
```

## Variables d’environnement

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

##  Lancer le back-end

```bash
mvn spring-boot:run
```

### API accessible à l’adresse :

http://localhost:8080

---

## Installation du front-end
```bash
cd MeetMatesFRONT
npm install
```

##  Lancer le front-end
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


