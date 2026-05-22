// Angular
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core (models)
import { User } from '../../../../core/models/user.model';

/**
 * Sous-composant de présentation chargé
 * de l’affichage des informations utilisateur.
 *
 * Responsabilités :
 * - afficher la photo de profil
 * - afficher le nom, prénom et email
 */
@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})

export class ProfileCardComponent {
  @Input() user: User | null = null;
}
