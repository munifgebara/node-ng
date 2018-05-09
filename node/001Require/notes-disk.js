const fs = require("fs");
let notas = [];
notas = JSON.parse(fs.readFileSync("notas.json"));
module.exports.idade = 33;
module.exports.adiciona = (nota) => {
    notas.push(nota);
    fs.writeFileSync("notas.json", JSON.stringify(notas));
}
module.exports.lista = () => {
    notas.forEach(v => {
        console.log(v);
    });
    console.log('Total de ', notas.length);
}
