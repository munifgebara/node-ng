import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista = [];

  constructor(private service: ProdutosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.atualizaLista();
  }

  atualizaLista() {
    this.service.getAll().then(result => {
      this.lista = result;
    })
  }

  excluir(id) {
    this.service.remove(id).then(result => {
      this.atualizaLista();
    });

  }

  alterar(id) {
    this.router.navigate(['edita', id],
      { relativeTo: this.route });

  }

  novo() {
    this.router.navigate(['edita', 'novo'], { relativeTo: this.route });
  }

}
