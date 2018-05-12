import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: Http) {

  }

  consulta() {
    return this.http.get("http://localhost:3000/produtos")
    .toPromise().then(resposta=>resposta.json());
  }

  inserir(nome:string){
    return this.http.post("http://localhost:3000/produtos",
    {nome:nome})
    .toPromise().then(resposta=>resposta.json());
  }

}
