import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent } from "@ng-doc/app";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoolshapesComponent } from "../../projects/ngxpert/coolshapes/src/public-api";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent, CoolshapesComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coolspahes';
  noise = true;
  size = 30;
}
