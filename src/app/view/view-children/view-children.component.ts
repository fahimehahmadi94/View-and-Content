import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.scss']
})
export class ViewChildrenComponent {
  @Input() name = '';

  open = signal(false);

  toggle() {
    this.open.update(v => !v);
  }
}
