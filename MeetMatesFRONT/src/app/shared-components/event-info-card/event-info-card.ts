// Angular
import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';

// Core
import { EventDetails } from '../../core/models/event-details.model';

// Shared
import { StatusColorPipe } from '../../shared-components/pipes/statusColor.pipe';

// Utils
import {
  getStatusLabel as mapStatusLabel,
  getParticipationLabel
} from '../../core/utils/labels.utils';

/**
 * Carte compacte affichant les informations clés d’un événement.
 *
 * Responsabilités :
 * - afficher une version synthétique d’un événement
 * - gérer l’affichage conditionnel :
 *   - activité
 *   - statut
 *   - participation
 *   - adresse
 *   - date
 *
 * Utilisée dans :
 * - listes d’événements
 * - recherche
 * - profil utilisateur
 * - onglets participation / organisation
 */
@Component({
  selector: 'app-event-info-card',
  standalone: true,
  imports: [
    CommonModule,
    StatusColorPipe
  ],
  templateUrl: './event-info-card.html',
  styleUrls: ['./event-info-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventInfoCardComponent {

  @Input({ required: true })
  event!: Partial<EventDetails>;

  @Input() showActivity = true;
  @Input() showStatus = true;
  @Input() showParticipationStatus = false;
  @Input() showAddress = true;
  @Input() showDate = false;

  get status(): string | undefined {
    return this.event?.status;
  }

  get participationStatus(): string | null {
    return this.event?.participationStatus ?? null;
  }

  get hasStatus(): boolean {
    return !!this.status;
  }

  get hasParticipationStatus(): boolean {
    return !!this.participationStatus;
  }

  get statusLabel(): string {
    return this.status
      ? mapStatusLabel(this.status)
      : '';
  }

  get participationLabel(): string {
    return getParticipationLabel(this.participationStatus);
  }
}