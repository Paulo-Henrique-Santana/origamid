const comida = 'Pizza';
const agua = new String('Agua    ');

console.log(agua.length)

const frase = 'A melhor comida';

console.log(frase[frase.length - 1]);
console.log(frase.charAt(frase.length - 1));

const frase2 = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase2.concat(linguagem, '!!', 'Bom dia');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));

console.log(fruta.endsWith('nas'));
console.log(fruta);

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao3.slice(-5));

console.log(fruta.lastIndexOf('na'));

const preco = 'R$ 99,00';

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => console.log(item.padStart(10, '-')));

const frase3 = 'Ta';

console.log(frase3.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

const arrayLista = listaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join(', '));

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase() === 'FEMININO');

const valor = '   R$ 23.00  ';
console.log(valor.trimStart());
console.log(valor.trimEnd());
console.log(valor.trim());