// Angular
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Core
import { User } from '../../../../core/models/user.model';

// Shared
import { AppButtonComponent } from '../../../../shared-components/button/button.component';

/**
 * Sous-composant de présentation dédié à la gestion
 * de la photo de profil utilisateur.
 */
@Component({
  selector: 'app-edit-profile-picture',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    AppButtonComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-profile-picture.component.html',
  styleUrls: ['./edit-profile-picture.component.scss'],
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