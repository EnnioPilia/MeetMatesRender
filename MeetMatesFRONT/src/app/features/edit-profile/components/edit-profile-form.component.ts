// Angular
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

// Shared
import { AppInputComponent } from '../../../shared-components/input/input.component';
import { AppButtonComponent } from '../../../shared-components/button/button.component';

// Core
import { User } from '../../../core/models/user.model';

/**
 * Sous-composant de formulaire dédié à l’édition
 * des informations personnelles de l’utilisateur.
 */
@Component({
  selector: 'app-edit-profile-form',
  styleUrls: ['./edit-profile-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppInputComponent,
    AppButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <form
      class="edit-profile-form"
      [formGroup]="form"
      (ngSubmit)="onSubmit()">

      <app-input
        label="Prénom"
        [control]="form.get('firstName')!"
        type="text">
      </app-input>

      <app-input
        label="Nom"
        [control]="form.get('lastName')!"
        type="text">
      </app-input>

      <app-button
        label="ENREGISTRER LES MODIFICATIONS"
        class="primary-button"
        type="submit"
        [fullWidth]="true"
        [disabled]="form.invalid || loading">
      </app-button>

    </form>

  `,
})
export class EditProfileFormComponent implements OnInit {

  @Input({ required: true })
  user!: User;

  @Output()
  save = new EventEmitter<Partial<User>>();

  private fb = inject(FormBuilder);

  form!: FormGroup;

  loading = false;

  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: [
        this.user.firstName,
        [Validators.required]
      ],

      lastName: [
        this.user.lastName,
        [Validators.required]
      ]
    });

  }

  onSubmit(): void {

    if (this.form.invalid) return;

    this.save.emit(this.form.value);

  }

}