const fs = require('fs');
const uuidv1 = require('uuid/v1');
const os = require("os");

export class SuperServiceFile {

    private FN = "";

    constructor(protected colecao: string, protected atributos: string[]) {
        console.log(`Starting SERVICE ${this.colecao}`);
        this.FN = this.fileName();
        if (!fs.existsSync(this.FN)) {
            console.log("Creating service file");
            this.saveAll([]);
            this.initData();
        }

    }

    initData() {
    }

    fileName() {
        return `${os.userInfo().homedir}/${this.colecao}.json`;
    }

    listAll() {
        let list = JSON.parse(fs.readFileSync(this.FN));
        if (!list) {
            list = [];
            this.saveAll(list);
        }
        return list;
    }

    saveAll(list: any[]) {
        fs.writeFileSync(this.FN, JSON.stringify(list));

    }

    add(item) {
        let list = this.listAll();
        let i = { id: uuidv1() };
        this.atributos.forEach(att => {
            i[att] = item[att];
        });
        list.push(i);
        this.saveAll(list);
        return i;
    }


    getById(id) {
        let list = this.listAll();
        let i = list.find(item => item.id == id);
        if (i) {
            return i;
        }
        return {};
    }

    listByField(field: string, value: any) {
        let list = this.listAll();
        let i = list.filter(item => item[field] == value);
        if (i) {
            return i;
        }
        return [];
    }


    getByField(field: string, value: any) {
        let list = this.listAll();
        let i = list.find(item => item[field] == value);
        if (i) {
            return i;
        }
        return {};
    }


    update = (item) => {
        let list = this.listAll();
        let i = list.find(it => item.id == it.id);
        if (i) {
            this.atributos.forEach(att => {
                i[att] = item[att];
            });
            this.saveAll(list);
            return i;
        }
        return {};
    }

    remove = (id) => {
        let list = this.listAll();
        let l = list.filter(it => it.id != id);
        this.saveAll(l);
        return {};
    }

}
