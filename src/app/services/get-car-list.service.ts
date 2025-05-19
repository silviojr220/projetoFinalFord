import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class GetCarListService {

  carros = 'http://localhost:3001/vehicles';

  constructor(private http: HttpClient) { }
  
  getCarList():Observable <Veiculo[]> {
    return this.http.get<{ vehicles: Veiculo[] }>(this.carros).pipe(map(resp => resp.vehicles))
  }
}
