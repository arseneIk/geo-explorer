import { Routes } from '@angular/router';
import { DepartementList } from './departement-list/departement-list';

export const routes: Routes = [
  { path: '',redirectTo: 'departements', pathMatch: 'full' },
  { path: 'departements', component: DepartementList, title: 'Departements' },
  { path: 'departements/:id',}
];
