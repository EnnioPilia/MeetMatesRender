// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class AppButtonComponent {
  @Input() label!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth = false;
  @Input() icon?: string;
  @Input() routerLink?: string | (string | number)[];
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}