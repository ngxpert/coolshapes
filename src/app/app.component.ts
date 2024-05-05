import {
  NgDocRootComponent,
  NgDocNavbarComponent,
  NgDocSidebarComponent,
  NgDocThemeToggleComponent,
} from '@ng-doc/app';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgDocButtonComponent, NgDocButtonIconComponent, NgDocIconComponent, NgDocTooltipDirective } from '@ng-doc/ui-kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocIconComponent,
    NgDocButtonIconComponent,
    NgDocTooltipDirective,
    NgDocThemeToggleComponent,
    NgDocButtonComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'coolshapes';
  noise = true;
  size = 30;
}
