import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponentComponent } from './button-component/button-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonComponentComponent],
  template: `
    
    <app-button-component/>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-component-library';
}
