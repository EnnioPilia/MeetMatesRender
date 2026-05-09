// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';

// Angular Material
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Shared
import { AppInputComponent } from '../../../shared-components/input/input.component';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    AppInputComponent
  ],
  template: `

<div [formGroup]="form" class="event-info">

  @if (showStatus) {

    <mat-button-toggle-group formControlName="status">
      <mat-button-toggle value="OPEN">Ouvert</mat-button-toggle>
      <mat-button-toggle value="FULL">Complet</mat-button-toggle>
      <mat-button-toggle value="CANCELLED">Annulé</mat-button-toggle>
      <mat-button-toggle value="FINISHED">Terminé</mat-button-toggle>
    </mat-button-toggle-group>

  }

  <app-input
    label="Titre"
    [control]="titleControl"
    type="text"
    [required]="true">
  </app-input>

  <div class="description-wrapper">

    <label class="description-label">
      Description
    </label>

    <textarea
      class="description-textarea"
      formControlName="description">
    </textarea>

    @if (
      form.get('description')?.hasError('required') &&
      (form.get('description')?.touched ||
       form.get('description')?.dirty)
    ) {
      <span class="description-error">
        Description requise.
      </span>
    }

  </div>

</div>

  `,
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent {

  @Input({ required: true }) form!: FormGroup;
  @Input() showStatus = false;

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }
}