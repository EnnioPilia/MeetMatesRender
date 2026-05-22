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
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    EventInfoCardComponent
  ],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})

export class EventCardComponent {
  @Input() event!: EventListItem;
  @Output() viewDetails = new EventEmitter<EventListItem>();

  emitDetails() {
    this.viewDetails.emit(this.event);
  }
}
