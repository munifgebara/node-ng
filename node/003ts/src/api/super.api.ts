import * as express from 'express';
import { SuperService } from '../services/super.service';

export class SuperApi {


    constructor(protected router: any, protected colecao: string, protected service: SuperService) {
        console.log(`Iniciando API ${this.colecao}`);
        this.initHttpMethods();
    }

    initHttpMethods() {
        this.router.get(`/api/${this.colecao}`, (req, res) => {
            res.send(this.service.listAll());
        });

        this.router.get(`/api/${this.colecao}/:id`, (req, res) => {
            res.send(this.service.getById(req.params.id));
        });

        this.router.get(`/api/${this.colecao}/:atributo/:valor`, (req, res) => {
            res.send(this.service.getByField(req.params.atributo, req.params.valor));
        });
        this.router.get(`/api/${this.colecao}/list/:atributo/:valor`, (req, res) => {
            res.send(this.service.listByField(req.params.atributo, req.params.valor));
        });

        this.router.post(`/api/${this.colecao}`, (req, res) => {
            res.send(this.service.add(req.body));
        });

        this.router.put(`/api/${this.colecao}/:id`, (req, res) => {
            req.body.id = req.params.id;
            res.send(this.service.update(req.body));
        });

        this.router.put(`/api/${this.colecao}`, (req, res) => {
            res.send(this.service.update(req.body));
        });


        this.router.delete(`/api/${this.colecao}/:id`, (req, res) => {
            res.send(this.service.remove(req.params.id));
        });
    }

}