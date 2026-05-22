// Angular
import { Component, EventEmitter, Input, OnInit, Output, inject, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

// Core
import { User } from '../../../core/models/user.model';

// Shared components
import { AppInputComponent } from '../../../shared-components/input/input.component';
import { AppButtonComponent } from '../../../shared-components/button/button.component';


/**
 * Sous-composant de formulaire dédié à l’édition
 * des informations personnelles de l’utilisateur.
 */
@Component({
  selector: 'app-edit-profile-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppInputComponent,
    AppButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss'],
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