import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{Item.name}}!</h1>
    <ng-container [ngTemplateOutlet]="top" [ngTemplateOutletContext]="{ $implicit: Item }"></ng-container>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent<T extends { name: string }>  {
  @ContentChild(TemplateRef) top: TemplateRef<any>;
  @Input() Item: T;
}
