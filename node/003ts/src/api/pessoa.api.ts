
import * as express from 'express';
import { SuperApi } from './super.api';
import { SuperService } from '../services/super.service';
import { PessoaService } from '../services/pessoa.service';

export class PessoaApi extends SuperApi {

    constructor(r: any) {
        super(r, "pessoas", new PessoaService());
    }


}