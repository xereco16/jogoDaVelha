const prompt = require('prompt-sync');
const ler = prompt();
const escrever = (valor) => {
    console.log(valor);
}
module.exports = {
    ler,
    escrever
}