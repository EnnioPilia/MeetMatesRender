// Angular
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  inject,
  Signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

// Core
import { EventMapperService } from '../../../core/mappers/event-mapper';
import { EventResponse } from '../../../core/models/event-response.model';

// Shared components
import { EventInfoCardComponent } from '../../../shared-components/event-info-card/event-info-card';

/**
 * Sous-composant dédié à l’affichage des événements
 * organisés par l’utilisateur.
 *
 * Responsabilités :
 * - afficher la liste des événements organisés
 * - permettre l’accès à la page organisateur
 */
@Component({
  selector: 'app-organization-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    MatButtonModule,
    EventInfoCardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./organization-tab.component.scss'],
  template: `

    <div class="organization-list">

      @if (mappedEvents.length === 0) {

        <p class="empty-state">
          Vous n'organisez aucun événement actuellement.
        </p>

      } @else {

        <mat-accordion
          multi
          class="events-accordion">

          @for (event of mappedEvents; track event.eventId) {

            <mat-expansion-panel class="event-panel">

              <mat-expansion-panel-header>

                <div class="event-header">

                  <span class="event-title">
                    {{ event.title }}
                  </span>

                  <span class="event-date">
                    {{ event.date | date: 'dd/MM/yy' }}
                  </span>

                </div>

              </mat-expansion-panel-header>

              <div class="event-content">

                <app-event-info-card
                  [event]="event">
                </app-event-info-card>

                <button
                  class="primary-button"
                  [routerLink]="['/event-organizer', event.eventId]">

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
export class OrganizationTabComponent {

  private mapper = inject(EventMapperService);

  @Input({ required: true })
  events!: Signal<EventResponse[]>;

  get mappedEvents() {
    return this.mapper.toEventList(this.events());
  }
}