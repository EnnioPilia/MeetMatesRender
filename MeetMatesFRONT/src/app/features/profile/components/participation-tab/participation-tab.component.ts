// Angular
import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

// Core
import { EventMapperService } from '../../../../core/mappers/event-mapper';
import { EventListItem } from '../../../../core/models/event-list-item.model';
import { EventResponse } from '../../../../core/models/event-response.model';

// Shared components
import { EventInfoCardComponent } from '../../../../shared-components/event-info-card/event-info-card';

/**
 * Sous-composant dédié à l’affichage des événements
 * auxquels l’utilisateur participe.
 *
 * Responsabilités :
 * - afficher la liste des événements de participation
 * - présenter les informations principales
 * - présenter le statut de participation
 * - fournir un accès à la page participant
 */
@Component({
  selector: 'app-participation-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    MatButtonModule,
    EventInfoCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './participation-tab.component.html',
  styleUrls: ['./participation-tab.component.scss'],
})

export class ParticipationTabComponent {
  private mapper = inject(EventMapperService);

  @Input()
  events: EventResponse[] = [];

  get mappedEvents(): EventListItem[] {
    return this.mapper.toEventList(this.events);
  }
}