import { Component } from '@angular/core';

@Component({
  selector: 'ma-root',
  imports: [],
  template: `
    Hello {{title}}
  `,
  styles: ``,
})
export class AppComponent {
  title = 'mini-app-zoneless';
}
