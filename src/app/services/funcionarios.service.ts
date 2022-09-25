import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Professores } from '../models/professores';
@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  url = 'http://localhost:3000/funcionarios';

  constructor(private httpClient : HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getFuncionarios() {
    return this.httpClient.get<Professores[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  getFuncionarioById(id: number): Observable<Professores> {
    return this.httpClient.get<Professores>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveFuncionario(professores: Professores): Observable<Professores> {
    return this.httpClient.post<Professores>(this.url, JSON.stringify(professores), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateFuncionario(professores: Professores): Observable<Professores> {
    return this.httpClient.put<Professores>(this.url + '/' + professores.id, JSON.stringify(professores), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteFuncionario(professores: Professores) {
    return this.httpClient.delete<Professores>(this.url + '/' + professores.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
