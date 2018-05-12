import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-crud-produtos',
  templateUrl: './crud-produtos.component.html',
  styleUrls: ['./crud-produtos.component.css']
})
export class CrudProdutosComponent implements OnInit {

  constructor(private produtoService:ProdutosService  ) { 


  }


  ngOnInit() {
    this.produtoService.consulta();
  }

}
