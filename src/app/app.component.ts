import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
} from '@ng-doc/app';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'coolshapes';
  noise = true;
  size = 30;
}
