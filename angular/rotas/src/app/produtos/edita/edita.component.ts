import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  item = { id: "nada" };
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: ProdutosService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carrega(params['id']);
    })
  }

  carrega(id: string) {
    this.id = id;
    if (this.id === "novo") {
      return;
    }
    this.service.getOne(id).then(result => {
      this.item = result;
    });
  }


  onSubmit(form: NgForm) {
    if (this.id === "novo") {
      this.service.add(this.item).then(r => {
        this.router.navigate(['../..'], { relativeTo: this.route })
      });
    }
    else {
      this.item.id = this.id;
      this.service.update(this.item).then(r => {
        this.router.navigate(['../..'], { relativeTo: this.route })
      });
    }

  }
}
