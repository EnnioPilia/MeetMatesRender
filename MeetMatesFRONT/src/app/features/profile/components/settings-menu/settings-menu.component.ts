// Angular
import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * Sous-composant responsable de l’affichage
 * du menu de paramètres du profil utilisateur.
 *
 * Responsabilités :
 * - exposer des événements d’intention :
 *   - édition du profil
 *   - affichage des mentions légales
 *   - affichage des CGU
 *   - déconnexion
 *   - suppression du compte
 */
@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})

export class SettingsMenuComponent {
  @Output() editProfile = new EventEmitter<void>();
  @Output() showMentions = new EventEmitter<void>();
  @Output() showCgu = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() deleteAccount = new EventEmitter<void>();
}
