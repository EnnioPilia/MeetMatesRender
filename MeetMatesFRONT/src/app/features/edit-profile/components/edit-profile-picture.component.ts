// Angular
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';

import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core
import { User } from '../../../core/models/user.model';

// Shared
import { AppButtonComponent } from '../../../shared-components/button/button.component';

/**
 * Sous-composant de présentation dédié à la gestion
 * de la photo de profil utilisateur.
 */
@Component({
  selector: 'app-edit-profile-picture',
       styleUrls: ['./edit-profile-picture.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AppButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="profile-picture-section">

      <div class="picture-wrapper">

        <img
          [src]="previewUrl || user.profilePictureUrl || 'assets/images/default-avatar.png'"
          alt="photo profil"
          class="profile-picture"
        />

        @if (user.profilePictureUrl) {

          <button
            mat-icon-button
            type="button"
            class="delete-button"
            aria-label="Supprimer la photo"
            (click)="onDelete()">

            <mat-icon>delete</mat-icon>

          </button>

        }

      </div>

      <app-button
        label="AJOUTER UNE PHOTO"
        class="primary-button"
        type="button"
        [fullWidth]="true"
        (click)="fileInput.click()">
      </app-button>

      <input
        #fileInput
        type="file"
        accept="image/*"
        hidden
        (change)="onFileSelected($event)"
      />

    </div>

  `,
})
export class EditProfilePictureComponent {

  @Input({ required: true })
  user!: User;

  @Output()
  photoSelected = new EventEmitter<File>();

  @Output()
  photoDeleted = new EventEmitter<void>();

  previewUrl: string | null = null;

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file = input.files[0];

    this.previewUrl = URL.createObjectURL(file);

    this.photoSelected.emit(file);
  }

  onDelete(): void {
    this.photoDeleted.emit();
  }

}