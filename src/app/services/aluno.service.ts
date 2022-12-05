import { Aluno } from './../models/aluno';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = 'http://localhost:3000/alunos';

  constructor(private http : HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.url);
  }

  public get(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(this.url + '/' + id);
  }

  public add(newAluno: Aluno) {
    const professoresJson = JSON.stringify(newAluno);
    return this.http.post(this.url, professoresJson, httpOptions);
  }

  public update(aluno: Aluno): Observable<Aluno> {
    const alunoJson = JSON.stringify(Aluno);
    return this.http.put<Aluno>(
      `${this.url}/${aluno.id}`,
      alunoJson,
      httpOptions
    );
  }


  public buscarAluno(email: string, senha: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?email=${email}&senha=${senha}`);
}

  public delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
