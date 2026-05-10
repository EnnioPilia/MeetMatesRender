import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {

  @Input() title!: string;

  @Input() iconPath?: string;

  @Output() cardClick = new EventEmitter<void>();

  onCardClick(): void {
    this.cardClick.emit();
  }

get computedIconPath(): string {

  if (
    this.iconPath &&
    this.iconPath !== 'assets/images/icons/undefined' &&
    this.iconPath !== 'assets/images/icons/null'
  ) {
    return this.iconPath;
  }

  return `assets/images/icons/${this.title
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll('/', '-')}.png`;
}
}