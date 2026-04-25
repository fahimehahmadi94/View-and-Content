import {Component, ElementRef, Renderer2, signal, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  @ViewChild('title') title?: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  // changeColor() {
  //   this.renderer.setStyle(this.title?.nativeElement, 'color', 'blue');
  // }

  color = signal<'black' | 'blue'>('black');

  changeColor() {
    this.color.update(c => c === 'black' ? 'blue' : 'black');
  }


  count = signal(5);

  increment() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
