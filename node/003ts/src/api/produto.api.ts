
import * as express from 'express';
import { SuperApi } from './super.api';
import { SuperService } from '../services/super.service';
import { ProdutoService } from '../services/produto.service';

export class ProdutoApi extends SuperApi {

    constructor(r: any) {
        super(r, "produtos", new ProdutoService());
    }


}