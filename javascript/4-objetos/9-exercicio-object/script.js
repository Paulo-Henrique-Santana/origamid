// Crie uma função que verifique
// corretamente o tipo de dado

function verificarTipo(dado) {
  return Object.prototype.toString.call(dado);
} 

console.log(verificarTipo('teste'));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}
Object.defineProperty(quadrado, 'lados', {
  value: 4,
  enumerable: true
});

quadrado.lados = 6;
console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

delete configuracao.width;
configuracao.width = 1000;
delete configuracao.height;
configuracao.height = 1000;
delete configuracao.background;
configuracao.background = 1000;
console.log(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyDescriptors(String.prototype));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));