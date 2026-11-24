import { Routes } from '@angular/router';
import { DepartementList } from './departement-list/departement-list';
import { CommuneList } from './commune-list/commune-list';

export const routes: Routes = [
  { path: '',redirectTo: 'departements', pathMatch: 'full' },
  { path: 'departements', component: DepartementList, title: 'Departements' },
  {path: '', redirectTo: 'communes', pathMatch: 'full' },
  { path: 'communes', component: CommuneList, title: 'Communes' }
];
