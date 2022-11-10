import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modalidades } from '../models/modalidades';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ModalidadesService {
  url = 'http://localhost:3000/modalidades';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Modalidades[]> {
    return this.http.get<Modalidades[]>(this.url);
  }

  public get(id: number): Observable<Modalidades> {
    return this.http.get<Modalidades>(this.url + '/' + id);
  }

  public add(newModalidade: Modalidades) {
    const modalidadeJson = JSON.stringify(newModalidade);
    console.log(newModalidade);
    return this.http.post(this.url, modalidadeJson, httpOptions);
  }

  public update(modalidade: Modalidades): Observable<Modalidades> {
    const modalidadeJson = JSON.stringify(modalidade);
    return this.http.put<Modalidades>(
      `${this.url}/${modalidade.id}`,
      modalidadeJson,
      httpOptions
    );
  }

  public delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
