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
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
})

export class ParticipantListComponent {
  @Input() participants: { id: string; firstName: string; lastName: string }[] = [];
}
