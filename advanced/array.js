var arr = [
    "hello world",
    42,
    true
];

arr[0];         // "hello world"
arr[1];         // 42
arr[2];         // true
arr.length;     // 3

typeof arr;     // "object"

// Array methods

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



const numeros = [1,2,3,4,5]
const apenasNumerosImpares = numeros.filter((numero, indice, array) => {
    return numero % 2 !== 0;
});
console.log(apenasNumerosImpares)
/**
 * Saida 
 * [ 1, 3, 5 ]
 */



const palavras = ["Aprendendo", "como", "o", "Javascript", "funciona"]
const frase = palavras.join(" ")
console.log(frase)

/**
* Saida
* > Aprendendo como o Javascript funciona
*/

// Note que o separador é um espaço em branco " ", é diferente de ""
// Se o separador fosse "", as palavras não iriam ser separadas por espaço


const numeros = [1,2,3,4,5]
const novoTamanho = numeros.push(6,7,8,9)
console.log(numeros) // Saida: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(novoTamanho) // Saida: 9


const numeros = [1, 2, 3, 4, 5]
const elementoRemovido = numeros.pop();
console.log(numeros) // Saida: [1, 2, 3, 4]
console.log(elementoRemovido) // Saida: 5


const comidas = ["Cereal","Sanduíche","Mingau"]
const bebidas = ["Café","Suco de Laranja"]
const cafeDaManha = comidas.concat(bebidas)
console.log(cafeDaManha) // Saida: ["Cereal","Sanduíche","Mingau","Café","Suco de Laranja"]


const numbers = [2,4,6,8,10,12]
users.every(numbers => number%2 == 0) //true pois verificou que todos os numeros são pares
