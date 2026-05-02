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
- consulter des événements publiés par la communauté
- participer à des activités existantes
- créer leurs propres annonces afin d’inviter d’autres membres

Projet réalisé dans le cadre de la formation **Concepteur Développeur d’Applications (CDA)**.

---

## FONCTIONNALITÉS

###  Utilisateur
- Création de compte
- Authentification sécurisée (JWT + cookies HTTP-only)
- Gestion du profil utilisateur
- Suppression du compte (soft delete / hard delete)
- Consultation des événements
- Recherche et filtrage des activités
- Participation aux événements
- Création, modification et suppression d’annonces
- Page **Mes activités**
  - événements organisés
  - événements auxquels l’utilisateur participe

###  Administration
- Interface d’administration dédiée
- Gestion des utilisateurs
- Gestion des annonces et événements
- Protection des routes administrateur

---

## UI / UX

L’interface utilisateur a été conçue avec une approche centrée utilisateur, en mettant l’accent sur la clarté des interactions et la qualité des retours visuels.

### Expérience utilisateur
- Formulaires guidés avec validation en temps réel
- Navigation intuitive et accès rapide aux fonctionnalités principales
- Feedback utilisateur immédiat lors des actions (succès, erreur, chargement)
  
### Gestion des messages
- Les messages de succès et d’erreur sont centralisés côté back-end via un propriétés dédiées
- Ils sont transmis au front pour garantir une cohérence globale
- Affichage via des notifications snackbar (Angular Material) pour un retour utilisateur clair et non intrusif

### Design & Accessibilité
- Utilisation de Angular Material pour des composants accessibles et cohérents
- Tailwind CSS pour un design responsive et flexible
- Respect des bonnes pratiques d’accessibilité (contrastes, navigation, lisibilité)

---

## TECHNOLOGIES UTILISÉES

### Front-end
- Angular 19
- TypeScript
- Tailwind CSS
- Angular Material

### Back-end
- Spring Boot
- Java
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

- **Frontend** : SPA Angular (Standalone Components)
- **Backend** : API REST Spring Boot
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
- Guards
- Interceptors
- Components & Features modulaires

---

## INSTALLATION

### Prérequis
- Node.js >= 22
- Angular CLI >= 19
- Java JDK 17+
- Maven
- MySQL
- Docker (optionnel)

---

## Installation du back-end

```bash
git clone https://github.com/tonpseudo/meet-mates-back.git
cd meet-mates-back
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


###  Installation du front-end
```bash
git clone https://github.com/tonpseudo/meet-mates-front.git
cd meet-mates-front
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

## Conclusion

Ce projet met l’accent sur :
- la **sécurité** des échanges (JWT, cookies HTTP-only, rôles)
- la **maintenabilité** du code grâce à une architecture claire et modulaire
- l’utilisation de **technologies modernes full-stack** (Angular, Spring Boot)
- une **expérience utilisateur fluide et accessible**, pensée dès la conception

Le front-end a été développé en combinant **Angular Material** pour garantir
une cohérence visuelle, une bonne accessibilité et des composants UI robustes,
avec **Tailwind CSS** pour la mise en page et le responsive.

Meet Mates a été conçu comme une application évolutive, pouvant être enrichie
de nouvelles fonctionnalités et déployée dans un environnement professionnel

## Auteur

PILIA Ennio
 Développeur Fullstack 


