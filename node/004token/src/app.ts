const cors = require('cors');
const bodyParser = require('body-parser');

import * as express from 'express'

import { ProdutoApi } from './api/produto.api';
import { PessoaApi } from './api/pessoa.api';


class App {
    public express

    constructor() {
        this.express = express()
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Hello World!!!!'
            })
        })
        new ProdutoApi(router);
        new PessoaApi(router);
        this.express.use('/', router)
    }
}

export default new App().express
