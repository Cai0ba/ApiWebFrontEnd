export class Aluno {
  id: number;
  nome:string;
  email:string;
  senha : string;
  foto:string;

  constructor()

constructor(id?:number,nome?:string,email?:string
  ,senha?:string,isadm?:number,foto?:string){
  this.id = id ||0;
  this.nome = nome ||'';
  this.email = email ||'';
  this.senha = senha ||'';
  this.foto = foto || ''
  }
}
