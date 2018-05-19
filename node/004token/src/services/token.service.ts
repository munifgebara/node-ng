const uuidv1 = require('uuid/v1');
const mysql = require('mysql');

export class TokenService {

    protected connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'qwe123qwe',
        database: 'ngangular'
    });

    private colecao = 'token';

    constructor() {
        console.log(`Starting SERVICE ${this.colecao}`);
        this.connection.connect((erro) => {
            if (erro) {
                throw erro;
            }
            this.executeQuery(`select count(id) as qtd from ${this.colecao}`).then(r => {
                console.log(r);
                if (r[0]['qtd'] == 0) {
                    console.log(`Inserting data in ${this.colecao}`);
                    this.initData();
                }
            })
        });
    }


    initData() {
        this.add('joao@joao.com.br');
    }

    private executeQuery(q) {
        return new Promise((resolve, reject) => {
            this.connection.query(q, (error, results, fields) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            })
        });
    }


    add(usuario) {
        let item = { token: uuidv1(), usuario: usuario };
        this.connection.query(`insert into ${this.colecao} SET ?`, item);
        return item;
    }


    async getByToken(token) {
        let r = await this.executeQuery(`select * from ${this.colecao} where id = '${token}'`);
        if (r[0]) {
            return r[0];
        }
        return undefined;
    }

    remove = (token) => {
        this.connection.query(`delete from ${this.colecao} where id='${token}'`);
        return { token: token };
    }

}
