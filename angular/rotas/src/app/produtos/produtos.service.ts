import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public baseUrl = 'http://munif.com.br:3000/api';

  public collection = 'produtos';

  constructor(public http: Http) {

  }

  errorHandler = error => console.error('Service error', error);


  add(objeto) {
    return this.http.post(`${this.baseUrl}/${this.collection}`, objeto)
      .toPromise()
      .catch(this.errorHandler);
  }

  getAll(): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  getOne(id): Promise<any> {
    return this.http.get(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  remove(id) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${id}`)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }

  update(objeto) {
    return this.http.put(`${this.baseUrl}/${this.collection}/${objeto.id}`, objeto)
      .toPromise().then(response => response.json())
      .catch(this.errorHandler);
  }
}
