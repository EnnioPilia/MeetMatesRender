// Angular
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core (models)
import { Participant } from '../../../core/models/participant.model';

/**
 * Sous-composant de présentation dédié à l’affichage
 * des demandes de participation en attente.
 *
 * Responsabilités :
 * - afficher la liste des participants en attente de validation
 * - exposer des événements d’intention :
 *   - acceptation d’un participant
 *   - refus d’un participant
 */
@Component({
  selector: 'app-event-tab-pending',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './event-tab-pending.component.html',
  styleUrls: ['./event-tab-pending.component.scss'],
})

export class EventTabPendingComponent {
  @Input() pendingParticipants: Participant[] = [];
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();

  trackById(_: number, item: Participant) {
    return item.id;
  }
}
