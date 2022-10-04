const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
  array[index] = 'teste';
  console.log(item.toUpperCase(), index, array);
});
console.log(carros);

const li = document.querySelectorAll('li');

const retornoForeach = li.forEach((item, index) => {
  item.classList.add('ativa' + index)
});

console.log(retornoForeach);

const carros2 = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros2.map((item, index, array) => {
  return item.toUpperCase();
});

const numeros = [2, 4, 6, 78];
const numerosX2 = numeros.map(n => n * 2);

console.log(numerosX2);

console.log(novaArray);
console.log(carros2);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  }
]

const tempoAulas = aulas.map(aula => aula.min);

const nomeAulas = function(aula) {
  return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas);

const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0);

console.log(reduceAulas);

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);

console.log(maiorNumero);

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  console.log(aula.nome);
  acumulador[index] = aula.nome;
  console.log(acumulador);
  return acumulador;
}, {});

const frutas = ['Banana', 'hjds', 'Pêra', 'Uvas'];

const temUva = frutas.some((item) => {
  return item === 'Uva';
});

const every = frutas.every((item) => {
  console.log(item);
  return item;
});

const indexUva = frutas.findIndex(item => item === 'Uvas');
console.log('Index: ', indexUva);

console.log(every);

console.log(temUva);

const maiorQue3 = numeros2.every(n => n >= 3);
console.log(maiorQue3);

const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayFrutas = frutas2.filter(item => item);
console.log(arrayFrutas);

const maiores15 = aulas.filter(aula => aula.min > 15);
console.log(maiores15);