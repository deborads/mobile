const input = require('readline-sync');

let numero1 = Number(input.question("Digite o primeiro numero: "));
let numero2 = Number(input.question("Digite o segundo numero: "));

console.log(`Soma: ${numero1 + numero2}`);
console.log(`Subtracao: ${numero1 - numero2}`);
console.log(`Multiplicacao: ${numero1 * numero2}`);

if (numero2 === 0) {
    console.log("Erro: nao existe divisao por zero.");
} else {
    console.log(`Divisao: ${numero1 / numero2}`);
}
