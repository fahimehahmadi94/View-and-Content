import {Routes} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {ContentComponent} from './content/content.component';

export const routes: Routes = [
  {
    path: 'view',
    component: ViewComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {path: '**', redirectTo: 'view'}
];
