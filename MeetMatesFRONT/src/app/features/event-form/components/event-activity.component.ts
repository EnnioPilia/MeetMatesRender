// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';

// Core (models)
import { Activity } from '../../../core/models/activity.model';

// Shared components
import { AppInputComponent } from '../../../shared-components/input/input.component';
import { AppSelectComponent } from '../../../shared-components/select/select.component';

/**
 * Sous-composant de présentation dédié à la sélection
 * de l’activité et du nombre de participants d’un événement.
 *
 * Responsabilités :
 * - afficher la liste des activités disponibles
 * - permettre la sélection d’une activité
 * - saisir et valider le nombre maximal de participants
 */
@Component({
  selector: 'app-event-activity',
    styleUrls: ['./event-activity.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppInputComponent,
    AppSelectComponent
  ],
  template: `

    <div [formGroup]="form" class="event-activity">

      <app-select
        label="Activité"
        [control]="activityControl"
        [options]="activityOptions"
        error="Activité requise">
      </app-select>

      <app-input
        label="Nombre de participants"
        [control]="maxParticipantsControl"
        type="number">
      </app-input>

    </div>

  `
})
export class EventActivityComponent {

  @Input({ required: true }) form!: FormGroup;
  @Input() activities: Activity[] = [];

  get activityControl(): FormControl {
    return this.form.get('activityId') as FormControl;
  }

  get maxParticipantsControl(): FormControl {
    return this.form.get('maxParticipants') as FormControl;
  }

  get activityOptions() {
    return this.activities.map(activity => ({
      label: activity.name,
      value: activity.id
    }));
  }

}