import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: 'My Books - Home' } },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
