import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: Http) {

  }

  consulta() {
    this.http.get("http://localhost:3000/produtos")
    .toPromise()
      .then(
        (resposta) => { console.log(resposta.json()) }
      )
      .catch(
        (erro) => { console.log(erro) }
      )
  }

}
