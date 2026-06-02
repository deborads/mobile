const input = require('readline-sync');

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(input.question(`Digite o numero ${i}: `));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de numeros pares: ${pares}`);
console.log(`Quantidade de numeros impares: ${impares}`);