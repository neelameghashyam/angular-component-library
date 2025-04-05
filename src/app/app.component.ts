import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent} from './button-component/button-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonComponent],
  template: `
    
    <app-button-component/>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-component-library';
}
