import { Component, inject } from '@angular/core';
import { RouterLink} from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { GeoApi } from '../services/geo-api';
@Component({
  selector: 'app-departement-list',
  styleUrl: './departement-list.css',
  templateUrl: './departement-list.html',
  imports: [RouterLink]
})
export class DepartementList {
  private readonly geoApi = inject(GeoApi);
  protected readonly departements = toSignal(this.geoApi.getDepartements(), { initialValue: [] });
}


