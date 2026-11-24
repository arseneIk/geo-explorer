import { Component, effect, inject, input, signal } from '@angular/core';
import { Commune } from '../models/commune';
import { GeoApi } from '../services/geo-api';

@Component({
  imports: [],
  selector: 'app-commune-list',
  styleUrl: './commune-list.css',
  templateUrl: './commune-list.html',
})
export class CommuneList {
  private readonly geoApi = inject(GeoApi);
  // Le code du département, lu dans l'URL : /departements/17
  readonly code = input.required<string>();
  protected readonly communes = signal<Commune[]>([]);
  constructor() {
    // Charge les communes, et les recharge si le code du département change
    effect(() => {
      this.geoApi.getCommunes(this.code()).subscribe((communes) => this.communes.set(communes));
    });
  }
}
