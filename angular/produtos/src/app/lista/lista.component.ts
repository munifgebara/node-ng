import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista = [];

  nome = "";

  constructor(public servicoService: ServicoService) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza() {
    this.servicoService.getAll().then(dados => {
      this.lista = dados;
    })
  }


  salva(n) {
    this.servicoService.add({ nome: this.nome }).then(dados => {
      this.nome = "";
      this.atualiza();
    });
  }

  remove(id) {
    this.servicoService.remove(id).then(dados => {
      this.atualiza();

    });
  }

  altera(prod) {
    this.servicoService.update(prod).then(dados => {
      this.atualiza();
    });
  }



}
