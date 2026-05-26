const input = require('readline-sync');

let nome = input.question("Digite seu nome: ");
let idade = Number(input.question("Digite sua idade: "));
let cidade = input.question("Digite sua cidade: ");

console.log(`ola! Meu nome e ${nome}, tenho ${idade} anos e sou de ${cidade}.`);
