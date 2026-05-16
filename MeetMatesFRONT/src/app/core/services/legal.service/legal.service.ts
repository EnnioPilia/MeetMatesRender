// Angular
import { Injectable } from '@angular/core';

/**
 * Service fournissant les contenus légaux statiques de l'application.
 *
 * Centralise :
 * - les Conditions Générales d’Utilisation (CGU)
 * - les Mentions légales
 *
 * Les contenus sont retournés sous forme de chaînes HTML
 * destinées à être affichées dans des boîtes de dialogue ou pages dédiées.
 */
@Injectable({
  providedIn: 'root'
})
export class LegalService {

  /** Retourne le contenu HTML des Conditions Générales d’Utilisation. */
  getCguContent(): string {

    return `
      <h3 class="legal-title">
        Conditions Générales d’Utilisation
      </h3>

      <p>
        <strong>Dernière mise à jour :</strong>
        ${new Date().getFullYear()}
      </p>

      <p>
        La présente application est un projet pédagogique réalisé
        dans le cadre d’une formation Concepteur Développeur
        d’Applications (CDA).
      </p>

      <p>
        L’application permet aux utilisateurs de créer, organiser
        et participer à des événements sportifs ou de loisirs.
      </p>

      <h4 class="legal-subtitle">
        Création de compte
      </h4>

      <p>
        L’accès à certaines fonctionnalités nécessite la création
        d’un compte utilisateur. L’utilisateur s’engage à fournir
        des informations exactes.
      </p>

      <h4 class="legal-subtitle">
        Responsabilité
      </h4>

      <p>
        L’éditeur ne pourra être tenu responsable des dommages
        résultant de l’utilisation de l’application.
      </p>

      <h4 class="legal-subtitle">
        Données personnelles
      </h4>

      <p>
        Les données collectées sont utilisées uniquement dans le cadre
        du fonctionnement de l’application et ne sont pas transmises
        à des tiers.
      </p>

      <p class="legal-text-spacing">
        L’utilisation de l’application implique l’acceptation pleine
        et entière des présentes conditions.
      </p>
    `;
  }

  /** Retourne le contenu HTML des mentions légales. */
  getMentionsLegales(): string {

    return `
      <h3 class="legal-title">
        Mentions légales
      </h3>

      <p>
        Cette application est un projet pédagogique réalisé
        dans le cadre d’une formation Concepteur Développeur
        d’Applications à Simplon Grenoble.
      </p>

      <p>
        <strong>Éditeur :</strong>
        Projet étudiant – usage non commercial
      </p>

      <p>
        <strong>Responsable de publication :</strong>
        PILIA Ennio
      </p>

      <p>
        <strong>Hébergement :</strong>
        Environnement de développement
        et d’hébergement pédagogique
      </p>

      <p class="legal-text-spacing">
        L’application n’a pas vocation à un usage commercial.
      </p>
    `;
  }
}