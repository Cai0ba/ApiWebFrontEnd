import { Modalidades } from 'src/app/models/modalidades';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalidadesService } from 'src/app/services/modalidades.service';
@Component({
  selector: 'app-criacao-modalidades',
  templateUrl: './criacao-modalidades.component.html',
  styleUrls: ['./criacao-modalidades.component.css']
})
export class CriacaoModalidadesComponent implements OnInit {

  constructor(private rota: Router, private service: ModalidadesService) { }
public modalidade: Modalidades = new Modalidades()
  ngOnInit(): void {
  }

  public criar() {
    this.service.add(this.modalidade).subscribe((resposta)=>{
      console.log(resposta);
      this.rota.navigate(['/modalidades']);
    });
  }

}
