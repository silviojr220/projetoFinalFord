import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/login';

  constructor(private http: HttpClient) {}

  login(nome: string, senha: string): Observable<Usuario> {
    const payload = { nome, senha };

    return this.http.post<Usuario>(this.apiUrl, payload).pipe(
      map((res: Usuario) => res),
      catchError(err => {
        console.error('Erro no login:', err);
        return throwError(() => new Error(err.error?.message || 'Erro desconhecido'));
      })
    );
  }
}
