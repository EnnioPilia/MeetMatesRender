// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * Composant d’indicateur de chargement.
 *
 * Responsabilités :
 * - afficher un spinner Material
 * - afficher un message personnalisable
 * - s’adapter à un affichage plein écran ou contenu
 */
@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})

export class LoadingSpinnerComponent {
  @Input() message: string = 'Chargement des donnés...';
  @Input() diameter: number = window.innerWidth >= 1024 ? 140 : 70;
  @Input() fullHeight: boolean = true;
}
