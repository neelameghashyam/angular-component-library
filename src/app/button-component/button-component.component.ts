import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [MatButtonModule, NgClass, NgStyle],
  template: `
    <button
      mat-raised-button
      type="button"
      [ngClass]="computedClasses"
      [ngStyle]="{ backgroundColor: backgroundColor }"
      (click)="onClick.emit($event)"
    >
      {{ label }}
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  /** Is this the primary action button? */
  @Input() primary = false;

  /** Background color override */
  @Input() backgroundColor?: string;

  /** Button size */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /** Button label */
  @Input() label = 'Click Me';

  /** Click handler */
  @Output() onClick = new EventEmitter<Event>();

  /** Tailwind-based dynamic class builder */
  get computedClasses(): string[] {
    const base = 'text-white font-semibold rounded-xl transition-shadow duration-300 shadow-md hover:shadow-lg';
    const sizeMap = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-5 py-2 text-base',
      large: 'px-7 py-3 text-lg'
    };
    const mode = this.primary ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-600';

    return [base, sizeMap[this.size], mode];
  }
}
