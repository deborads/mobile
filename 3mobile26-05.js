const input = require('readline-sync');

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = Number(input.question(`digite a nota ${i}: `));

    soma = soma + nota;
}

let media = soma / 5;

console.log(`Media final: ${media}`);

if (media >= 7) {
    console.log("aluno aprovado.");
} else if (media >= 5) {
    console.log("aluno em recuperacao.");
} else {
    console.log("aluno reprovado.");
}
