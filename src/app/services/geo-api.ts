import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { Commune } from '../models/commune';
// Les appels à l'API Géo : https://geo.api.gouv.fr
@Service()
export class GeoApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://geo.api.gouv.fr';
  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${this.baseUrl}/departements`);
  }
  getCommunes(codeDepartement: string): Observable<Commune[]> {
    return this.http.get<Commune[]>(`${this.baseUrl}/departements/${codeDepartement}/communes`, {
      params: { fields: 'nom,code,codesPostaux,population' },
    });
  }
}
