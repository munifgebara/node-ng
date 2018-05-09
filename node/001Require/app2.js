const notes = require("./notes");
console.log("app2.js");
console.log(`Sua idade é ${notes.idade}`);
notes.adiciona("Bom dia");
notes.adiciona("Boa tarde");
notes.adiciona("Boa noite");
notes.lista();

console.log(notes.notas);