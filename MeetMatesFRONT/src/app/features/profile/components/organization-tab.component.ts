// Angular
import { Component, Input, ChangeDetectionStrategy, inject, Signal } from '@angular/core';

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
  templateUrl: './organization-tab.component.html',
  styleUrls: ['./organization-tab.component.scss'],
})

export class OrganizationTabComponent {
  private mapper = inject(EventMapperService);

  @Input({ required: true })
  events!: Signal<EventResponse[]>;

  get mappedEvents() {
    return this.mapper.toEventList(this.events());
  }
}