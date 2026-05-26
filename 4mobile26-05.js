const input = require('readline-sync');

let numero = Number(input.question("digite um numero: "));

console.log(`\ntabuada do ${numero}\n`);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
}