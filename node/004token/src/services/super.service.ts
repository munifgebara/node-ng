const fs = require('fs');
const uuidv1 = require('uuid/v1');
const os = require("os");
const mysql = require('mysql');

export class SuperService {

    protected connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'qwe123qwe',
        database: 'ngangular'
    });


    constructor(protected colecao: string, protected atributos: string[]) {
        console.log(`Starting SERVICE ${this.colecao}`);
        this.connection.connect((erro) => {
            if (erro) {
                throw erro;
            }
            this.executeQuery(`select count(id) as qtd from ${colecao}`).then(r => {
                console.log(r);
                if (r[0]['qtd'] == 0) {
                    console.log(`Inserting data in ${this.colecao}`);

                    this.initData();
                }
            })
        });
    }


    initData() {
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


    async listAll() {
        let r = await this.executeQuery(`select * from ${this.colecao}`);
        return r;
    }

    add(item) {
        item.id = uuidv1();
        this.connection.query(`insert into ${this.colecao} SET ?`, item);
        return item;
    }


    async getById(id) {
        let r = await this.executeQuery(`select * from ${this.colecao} where id = '${id}'`);
        if (r[0]) {
            return r[0];
        }
        return {};
    }

    async listByField(field: string, value: any) {
        let r = await this.executeQuery(`select * from ${this.colecao} where ${field} = '${value}'`);
        return r;
    }


    async getByField(field: string, value: any) {
        let r = await this.executeQuery(`select * from ${this.colecao} where ${field} = '${value}'`);
        if (r[0]) {
            return r[0];
        }
        return {};
    }


    update = (item) => {

        let i = { id: item.id };
        let s = `id='${i.id}' `;
        this.atributos.forEach(att => {
            i[att] = item[att];
            s += `,${att}='${i[att]}' `;
        });
        console.log(`update ${this.colecao} set ${s} where id='${i.id}'`);
        this.connection.query(`update ${this.colecao} set ${s} where id='${i.id}'`);
        return i;
    }

    remove = (id) => {
        this.connection.query(`delete from ${this.colecao} where id='${id}'`);
        return { id: id };
    }

}
