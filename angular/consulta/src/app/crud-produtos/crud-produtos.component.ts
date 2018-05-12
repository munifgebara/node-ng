import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-crud-produtos',
  template: `
     <ul>
        <li *ngFor="let item of lista">
           {{item.nome}}
        </li>
     </ul>

     Nome:<input type="text" [(ngModel)]="nome" />
     <button (click)="inserir()" >Inserir</button>
  `,
  styleUrls: ['./crud-produtos.component.css']
})
export class CrudProdutosComponent implements OnInit {

  nome = "";

  lista = [];

  constructor(private produtoService: ProdutosService) {


  }

  ngOnInit() {
    this.atualiza();
  }


  atualiza(){
    this.produtoService.consulta().then(
      produtos => {
        this.lista = produtos;
      }
    );
  }

  inserir() {
    this.produtoService.inserir(this.nome)
    .then(()=>{
      this.nome="";
      this.atualiza();
    });
  }

}
