export class Aluno {
  id: number;
  nome:string;
  email:string;
  senha : string;
  cpf : string;


  constructor()

constructor(id?:number,nome?:string,email?:string
  ,senha?:string,isadm?:number,cpf?:string){
  this.id = id ||0;
  this.nome = nome ||'';
  this.email = email ||'';
  this.senha = senha ||'';
  this.cpf = cpf ||'';

  }
}
