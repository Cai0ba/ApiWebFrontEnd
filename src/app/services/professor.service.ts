import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professores } from '../models/professor';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url = 'http://localhost:3000/professores';

  constructor(private http : HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getAll(): Observable<Professores[]> {
    return this.http.get<Professores[]>(this.url);
  }

  public get(id: number): Observable<Professores> {
    return this.http.get<Professores>(this.url + '/' + id);
  }

  public add(newProfessor: Professores) {
    const professoresJson = JSON.stringify(Professores);
    return this.http.post(this.url, professoresJson, httpOptions);
  }

  public update(professores: Professores): Observable<Professores> {
    const professoresJson = JSON.stringify(professores);
    return this.http.put<Professores>(
      `${this.url}/${professores.id}`,
      professoresJson,
      httpOptions
    );
  }

  public delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
