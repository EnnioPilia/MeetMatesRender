// Angular
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

// Core
import { EventMapperService } from '../../../core/mappers/event-mapper';
import { EventListItem } from '../../../core/models/event-list-item.model';
import { EventResponse } from '../../../core/models/event-response.model';

// Shared components
import { EventInfoCardComponent } from '../../../shared-components/event-info-card/event-info-card';

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
  styleUrls: ['./participation-tab.component.scss'],
  template: `

    <div class="participation-list">

      @if (mappedEvents.length === 0) {

        <p class="empty-state">
          Vous ne participez à aucun événement actuellement.
        </p>

      } @else {

        <mat-accordion
          multi
          class="events-accordion">

          @for (event of mappedEvents; track event.id) {

            <mat-expansion-panel class="event-panel">

              <mat-expansion-panel-header>

                <div class="event-header">

                  <span class="event-title">
                    {{ event.title }}
                  </span>

                  <span class="event-date">
                    {{ event.date | date:'dd/MM/yy' }}
                  </span>

                </div>

              </mat-expansion-panel-header>

              <div class="event-content">

                <app-event-info-card
                  [event]="event"
                  [showActivity]="false"
                  [showStatus]="true"
                  [showParticipationStatus]="true"
                  [showAddress]="true">
                </app-event-info-card>

                <button
                  class="primary-button"
                  [routerLink]="['/event-participant', event.eventId]">

                  VOIR DÉTAILS

                </button>

              </div>

            </mat-expansion-panel>

          }

        </mat-accordion>

      }

    </div>

  `
})
export class ParticipationTabComponent {

  private mapper = inject(EventMapperService);

  @Input()
  events: EventResponse[] = [];

  get mappedEvents(): EventListItem[] {
    return this.mapper.toEventList(this.events);
  }
}