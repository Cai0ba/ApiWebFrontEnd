import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { Modalidades } from '../models/modalidades';
@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {

  url = 'http://localhost:3000/modalidades';

  constructor(private httpClient : HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getModalidades(): Observable<Modalidades[]> {
    return this.httpClient.get<Modalidades[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  getModalidadeById(id: number): Observable<Modalidades> {
    return this.httpClient.get<Modalidades>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveModalidade(modalidade: Modalidades): Observable<Modalidades> {
    return this.httpClient.post<Modalidades>(this.url, JSON.stringify(modalidade), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateModalidade(modalidade: Modalidades): Observable<Modalidades> {
    return this.httpClient.put<Modalidades>(this.url + '/' + modalidade.id, JSON.stringify(modalidade), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteCar(modalidade: Modalidades) {
    return this.httpClient.delete<Modalidades>(this.url + '/' + modalidade.id, this.httpOptions)
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
