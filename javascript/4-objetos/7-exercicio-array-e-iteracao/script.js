// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);
const arrayObjsCursos = arrayCursos.map((item, index) => {
  return {
    titulo: item.querySelector('h1').innerText,
    descricao: item.querySelector('p').innerText,
    aulas: item.querySelector('.aulas').innerText,
    horas: item.querySelector('.horas').innerText
  }
});
console.log(arrayObjsCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(num => num > 100);
console.log(maiorQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const contemBaixo = instrumentos.some(item => item === 'Baixo');
console.log(contemBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((acumulador, compra) => {
  return acumulador + +compra.preco.slice(2).replace(',', '.')
}, 0);

console.log(totalCompras);