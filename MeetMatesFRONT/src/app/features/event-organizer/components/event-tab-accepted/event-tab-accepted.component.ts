// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core (models)
import { Participant } from '../../../../core/models/participant.model';

/**
 * Sous-composant de présentation dédié à l’affichage
 * des participants acceptés à un événement.
 *
 * Responsabilités :
 * - afficher les participants acceptés
 * - exclure l’organisateur de la liste affichée
 * - exposer un événement de refus de participation
 */
@Component({
  selector: 'app-event-tab-accepted',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './event-tab-accepted.component.html',
  styleUrls: ['./event-tab-accepted.component.scss'],
})

export class EventTabAcceptedComponent {
  @Input() acceptedParticipants: Participant[] = [];
  @Input() organizerName = '';
  @Output() reject = new EventEmitter<string>();

  get filteredAcceptedParticipants() {
    return this.acceptedParticipants.filter(
      p => `${p.firstName} ${p.lastName}`.trim() !== this.organizerName.trim()
    );
  }

  onReject(id: string) {
    this.reject.emit(id);
  }

  trackById(_: number, item: Participant) {
    return item.id;
  }
}
