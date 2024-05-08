import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgDocTocElementComponent } from '@ng-doc/app';

@Component({
  selector: 'li[toc-element]',
  templateUrl: 'toc-element.component.html',
  styleUrls: ['./toc-element.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink]
})
export class ToCElementComponent extends NgDocTocElementComponent {}
