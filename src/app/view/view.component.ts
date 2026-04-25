import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ViewChildComponent} from "./view-child/view-child.component";
import {ViewChildrenComponent} from './view-children/view-children.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view.component.html',
  imports: [
    ViewChildrenComponent,
    ViewChildComponent
  ],
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements AfterViewInit {

  @ViewChild(ViewChildComponent) viewChild?: ViewChildComponent;

  ngAfterViewInit(): void {
    console.log('counter', this.viewChild)
  }

  toggleChildColor() {
    this.viewChild?.changeColor();
  }

  resetCounter() {
    this.viewChild?.reset();
  }

  increaseCounter(): void {
    this.viewChild?.increment();
  }

// View Children
  @ViewChildren(ViewChildrenComponent) viewChildren?: QueryList<ViewChildrenComponent>;

  items = [
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
  ]

  toggleItems(): void {
    this.viewChildren?.forEach(child => child.toggle());
  }
}
