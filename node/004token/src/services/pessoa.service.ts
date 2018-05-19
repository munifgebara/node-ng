import { SuperService } from "./super.service";

export class PessoaService extends SuperService {



    constructor() {
        super("pessoas", ["nome", "telefone", "email"]);
    }

    initData() {
        this.add({ nome: "Munif", telefone: "+55 44 98403-4939", email: "munifgebara@gmail.com" });
    }



}