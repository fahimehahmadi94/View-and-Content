import {Component} from '@angular/core';
import {ContentChildrenComponent} from './content-children/content-children.component';
import {ContentChildComponent} from './content-child/content-child.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  imports: [
    ContentChildrenComponent,
    ContentChildComponent
  ]
})
export class ContentComponent {
  fruits = ['Apple', 'Banana', 'Orange'];
}
