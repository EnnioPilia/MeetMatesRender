// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Sous-composant de présentation dédié à l’affichage
 * de la liste des participants acceptés à un événement.
 *
 * Responsabilités :
 * - afficher les participants fournis par le parent
 * - gérer l’état vide (aucun participant)
 */
@Component({
  selector: 'app-participant-list.',
      styleUrls: ['./participant-list.component.scss'],
  standalone: true,
  imports: [CommonModule],
  template: `
  
<div class="participant-list-container">

  <p class="participant-list-title">
    LISTE DES PARTICIPANTS :
  </p>

  @if (participants.length) {

    <ul class="participants">

      @for (p of participants; track p.id) {

        <li class="participant-item">
          {{ p.firstName }} {{ p.lastName }}
        </li>

      }

    </ul>

  } @else {

    <p class="empty-state">
      Aucun participant accepté pour le moment.
    </p>

  }

</div>
  `
})
export class ParticipantListComponent {
  @Input() participants: { id: string; firstName: string; lastName: string }[] = [];
}
