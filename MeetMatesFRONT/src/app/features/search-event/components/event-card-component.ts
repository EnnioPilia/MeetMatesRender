// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatExpansionModule } from '@angular/material/expansion';

// Core (models)
import { EventListItem } from '../../../core/models/event-list-item.model';

// Shared components
import { EventInfoCardComponent } from '../../../shared-components/event-info-card/event-info-card';

/**
 * Sous-composant de présentation dédié à l’affichage
 * d’un événement dans la liste des résultats de recherche.
 *
 * Responsabilités :
 * - afficher les informations principales d’un événement
 * - fournir une action permettant d’accéder au détail
 */
@Component({
  selector: 'app-event-card',
   styleUrls: ['./event-card-component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    EventInfoCardComponent
  ],
  template: `

<mat-expansion-panel class="event-panel">

  <mat-expansion-panel-header class="event-header">

    <div class="event-header-content">

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
      (click)="emitDetails()">

      VOIR DÉTAILS

    </button>

  </div>

</mat-expansion-panel>
  `,
})
export class EventCardComponent {
  @Input() event!: EventListItem;
  @Output() viewDetails = new EventEmitter<EventListItem>();

  emitDetails() {
    this.viewDetails.emit(this.event);
  }
}
