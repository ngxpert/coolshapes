import {
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NgDocTocComponent, NgDocTocElementComponent } from '@ng-doc/app';
import { ToCElementComponent } from './toc-element/toc-element.component';

@Component({
  selector: 'toc',
  templateUrl: 'toc.component.html',
  styleUrls: ['./toc.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToCElementComponent, NgDocTocElementComponent],
})
export class TocComponent extends NgDocTocComponent {
  @ViewChildren(ToCElementComponent)
  override elements: QueryList<ToCElementComponent> =
    new QueryList<ToCElementComponent>();
}
