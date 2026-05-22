// Angular
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

// Angular Material
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Shared
import { AppInputComponent } from '../../../../shared-components/input/input.component';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    AppInputComponent
  ],
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})

export class EventInfoComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() showStatus = false;

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }
}