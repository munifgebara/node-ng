import { SuperService } from "./super.service";

export class ProdutoService extends SuperService {



    constructor() {
        super("produtos", ["nome", "codigo", "valor"]);
    }

    initData() {
        this.add({ nome: "Coca", codigo: "33", valor: 14.43 })
        this.add({ nome: "Fanta", codigo: "34", valor: 1.43 })
        this.add({ nome: "Dolly", codigo: "35", valor: 1 })
        this.add({ nome: "Arroz", codigo: "13", valor: 1.43 })
        this.add({ nome: "Feijao", codigo: "14", valor: 4.43 })
    }



}