console.log('Arquivo notes.js');


let notas = [];

module.exports.idade = 33;



module.exports.adiciona = (nota) => {
    notas.push(nota);
}

module.exports.lista = () => {
    notas.forEach(v => {
        console.log(v);
    });
}
