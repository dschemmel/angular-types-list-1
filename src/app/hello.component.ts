import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{Item.name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent<T extends { name: string }>  {
  @Input() Item: T;
}
