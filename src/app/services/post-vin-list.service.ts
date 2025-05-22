import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { VehicleData } from '../models/vehiclesVin.model';

@Injectable({
  providedIn: 'root'
})
export class PostVinListService {

  private vinApi = 'https://projetofinalapi.onrender.com/vehicleData';

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

  buscarPorTermo(termo: string): Observable<VehicleData[]> {
    return this.http.get<VehicleData[]>(`${this.vinApi}?termo=${termo}`).pipe(
      catchError(() => of([]))
    );
  }
  
}
