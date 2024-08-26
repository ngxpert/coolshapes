import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  template: `<img src="https://github.com/shhdharmen.png?size=300" />`,
  styles: `
    img {
      --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      box-shadow: var(--bs-box-shadow-sm) !important;
      border-radius: 50% !important;
      height: 150px;
      width: 150px;
    }
  `,
  standalone: true
})
export class AuthorComponent {}