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
  styleUrls: ['./event-tab-pending.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `

    <div class="participants-list">

  @if (pendingParticipants.length > 0) {

    <div class="participants-content">

      @for (p of pendingParticipants; track p.id) {

        <div class="participant-row">

          <span class="participant-name">
            {{ p.firstName }} {{ p.lastName }}
          </span>

          <div class="participant-actions">

            <button
              mat-icon-button
              color="primary"
              (click)="accept.emit(p.id)">

              <mat-icon>check</mat-icon>

            </button>

            <button
              mat-icon-button
              color="warn"
              (click)="reject.emit(p.id)">

              <mat-icon>highlight_off</mat-icon>

            </button>

          </div>

        </div>

      }

    </div>

  } @else {

    <p class="empty-state">
      Aucun participant en attente.
    </p>

  }

</div>
  `,
})
export class EventTabPendingComponent {
  @Input() pendingParticipants: Participant[] = [];
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();

  trackById(_: number, item: Participant) {
    return item.id;
  }
}
