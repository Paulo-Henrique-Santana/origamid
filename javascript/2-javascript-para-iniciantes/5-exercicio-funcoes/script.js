// Crie uma função para verificar se um valor é Truthy

function verificaValor(valor) {
  return !!valor;
}

console.log(verificaValor(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(ladoQuadrado) {
  return ladoQuadrado * 4;
}

console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Paulo Henrique', 'Santana da Silva'));

// Crie uma função que verifica se um número é par

function parOuImpar(numero) {
  if (numero % 2 == 0) {
    return 'é PAR';
  } else {
    return 'é ÍMPAR';
  }
}

console.log(parOuImpar(5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificaTipo(dado) {
  return typeof dado;
}

console.log(verificaTipo('teste'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
 console.log('Paulo Henrique');
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));