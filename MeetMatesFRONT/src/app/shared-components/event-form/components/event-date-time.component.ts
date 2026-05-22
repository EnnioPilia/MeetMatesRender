// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

/**
 * Sous-composant de présentation dédié à la saisie
 * de la date et des horaires d’un événement.
 *
 * Responsabilités :
 * - permettre la sélection de la date de l’événement
 * - saisir l’heure de début et l’heure de fin
 * - afficher les erreurs de validation liées aux champs temporels
 */
@Component({
  selector: 'app-event-date-time',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  styleUrls: ['./event-date-time.component.scss'],
  templateUrl: './event-date-time.component.html',
})

export class EventDateTimeComponent {
  @Input({ required: true }) form!: FormGroup;
}
