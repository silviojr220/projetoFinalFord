import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { VehicleData } from '../models/vehiclesVin.model';

@Injectable({
  providedIn: 'root'
})
export class PostVinListService {

  private vinApi = 'http://localhost:3001/vehicleData';

  constructor(private http: HttpClient) { }

  buscarDadosVeiculos(vin: string): Observable<VehicleData[]> {
    return this.http.post<VehicleData[]>(this.vinApi, { vin }).pipe(
      map(obj => [obj] as VehicleData[]),
      catchError(err => {
        console.error('Erro ao buscar dados do veículo', err);

        return of([] as VehicleData[]);
      })
    )
  }
}
