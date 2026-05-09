// Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

/**
 * Carte cliquable avec icône et titre.
 */
@Component({
  selector: 'app-icon-card',
  styleUrls: ['./icon-card.component.scss'],
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './icon-card.component.html'
})
export class IconCardComponent {

  @Input() title!: string;

  @Output() cardClick = new EventEmitter<void>();

  onCardClick(): void {
    this.cardClick.emit();
  }

  get computedIconPath(): string {
    return `/assets/images/icons/${this.title
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('/', '-')}.png`;
  }
}