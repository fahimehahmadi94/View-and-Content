import {Component, contentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
})
export class ContentChildComponent {
  // @ContentChild('myList') myList!: ElementRef;
  myList = contentChild<ElementRef>('myList');

  show = true;

  // ngAfterContentInit() {
  //   console.log('Projected Content:', this.myList );
  // }

  toggle() {
    this.show = !this.show;
  }
}
