// Angular
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, AbstractControl } from '@angular/forms';

/**
 * Composant de champ de formulaire générique basé sur Angular Material.
 *
 * Responsabilités :
 * - encapsuler un `FormControl`
 * - gérer les types de champs courants (text, email, date, etc.)
 * - centraliser la configuration visuelle et fonctionnelle des inputs
 *
 * Utilisé dans les formulaires de création, édition et recherche.
 */
@Component({
  selector: 'app-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})

export class AppInputComponent<T = any> {
  @Input({ required: true }) label!: string;
  @Input() type: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' = 'text';
  @Input() required = false;
  @Input() placeholder = '';
  @Input() icon?: string;
  @Input() maxLength?: number;

  private _control!: FormControl<T>;

  @Input({ required: true })
  set control(value: FormControl<T> | AbstractControl<T>) {
    this._control = value as FormControl<T>;
  }

  get control(): FormControl<T> {
    return this._control;
  }
}
