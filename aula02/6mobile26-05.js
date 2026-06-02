const input = require('readline-sync');

const secreto = 42;

let tentativas = 0;

console.log("jogo adivinhe o numero");

while (true) {

    let palpite = Number(input.question("digite um numero: "));

    tentativas++;

    if (palpite === secreto) {

        console.log(`parabens voce acertou em ${tentativas} tentativas.`);
        break;

    } else if (palpite < secreto) {

        console.log(" numero maior.");

    } else {

        console.log(" numero menor.");
    }
}

