import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <button
        mat-raised-button
        color="primary"
        class="px-6 py-3 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        Click Me
      </button>
    </div>
  `,
  styles: []
})
export class ButtonComponentComponent {}
