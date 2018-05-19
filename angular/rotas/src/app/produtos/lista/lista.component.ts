import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista = [];

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.service.getAll().then(result => {
      this.lista = result;
    })
  }

  novo() {
    console.log('novo');
  }
  excluir(id) {
    console.log('excluir ', id);
  }
  alterar(id) {
    console.log('alterar ', id);
  }

}
