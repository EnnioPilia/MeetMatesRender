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
  styleUrls: ['./event-date-time.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  template: `
<div [formGroup]="form" class="event-date-time">

  <div class="field">

    <label class="label">
      Date
    </label>

<div class="date-wrapper">

  <input
    matInput
    class="input"
    [matDatepicker]="picker"
    formControlName="eventDate" />

  <mat-datepicker-toggle
    matSuffix
    [for]="picker">
  </mat-datepicker-toggle>

</div>

<mat-datepicker #picker></mat-datepicker>
    @if (
      form.get('eventDate')?.hasError('required') &&
      (form.get('eventDate')?.touched || form.get('eventDate')?.dirty)
    ) {
      <span class="error">
        La date est requise.
      </span>
    }

  </div>

  <div class="time-row">

    <div class="field">

      <label class="label">
        Heure de début
      </label>

      <input
        class="input"
        type="time"
        formControlName="startTime" />

    </div>

    <div class="field">

      <label class="label">
        Heure de fin
      </label>

      <input
        class="input"
        type="time"
        formControlName="endTime" />

    </div>

  </div>

</div>

  `
})
export class EventDateTimeComponent {

  @Input({ required: true }) form!: FormGroup;
  
}
