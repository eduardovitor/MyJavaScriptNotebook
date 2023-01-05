/* O que é o escopo ?
Para entendermos escopo, podemos fazer a seguinte analogia:

Dentro de um país, temos diversos estados, e dentro dos estados temos municípios e dentro desse último os bairros. No código, por sua vez, temos o escopo do node, que seria equivalente ao país, o escopo do módulo, que seria os estados, e por fim as classes que podem ter funções dentro delas com seus escopos próprios.

Ou seja, há diferentes "reinos" dentro de um mesmo arquivo .JS, de forma que uma variável dentro de uma função não é acessível para quem está fora dela, ou então o valor de uma variável que está fora, pode ser alterada dentro de uma classe, porém seu valor fora dela continua não mudando.

Para poder transitar entre os diferentes escopos usamos a palavra reservada "this". */

// No primeiro exemplo, teremos a let C dentro do escopo da função.

function Exemplo() {
  let c = 10;
  return console.log(c);
}
Exemplo();
console.log(c);

// Espera-se recebermos um erro de que "C" não está definida.

/*Agora faremos um exemplo elevando o escopo da variável c,
 permitindo que ela seja acessada fora do escopo da função */

function Exemplo() {
  this.c = 10;
  return console.log(c);
}
Exemplo();
console.log(c);

// Espera-se receber 10 em ambas as chamadas.
