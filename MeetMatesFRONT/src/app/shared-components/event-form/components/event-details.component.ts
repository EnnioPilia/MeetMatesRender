// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

// Angular Material
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

// Shared components
import { AppSelectComponent } from '../../../shared-components/select/select.component';
import { MATERIAL_OPTIONS, LEVEL_OPTIONS } from '../../../shared-components/constants/event-option';

/**
 * Sous-composant de présentation dédié aux détails complémentaires
 * d’un événement.
 *
 * Responsabilités :
 * - permettre la sélection du niveau de l’événement
 * - permettre le choix du matériel requis
 * - afficher les erreurs de validation associées
 */
@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    AppSelectComponent
  ],
  styleUrls: ['./event-details.component.scss'],
  templateUrl: './event-details.component.html',
})

export class EventDetailsComponent {
  @Input({ required: true }) form!: FormGroup;

  materialOptions = MATERIAL_OPTIONS;
  levelOptions = LEVEL_OPTIONS;

  get levelControl(): FormControl {
    return this.form.get('level') as FormControl;
  }
}
