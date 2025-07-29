import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsList } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet ],
  template: `
    <app-header />
    <router-outlet />
  `,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-ecom');
}
