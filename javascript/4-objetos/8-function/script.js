const perimetro = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2 + '';
}

console.log(somar.name);

function darOi(nome, idade) {
  console.log('Oi ' + nome + idade);
}

darOi.call(null, 'Paulo', 21);

window.marca = 'Carro';
window.ano = 288

function descricaoCarro(velocidade) {
  console.log(this);
  console.log(this.marca + ' ' + this.ano + velocidade);
}

descricaoCarro.call({marca: 'Honda', ano: 2015}, 100);

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

carros.forEach.call(frutas, item => console.log(item));

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  console.log(this);
  this.element.classList.add(classe);
}

const li = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativar');

// const ul = new Dom('ul');

// ul.ativo.call(li, 'ativo');
// ul.ativo('ativar');

Array.prototype.pop.call(frutas);
frutas.pop();

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3
}

const li2 = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = arrayLi.filter.bind(li2, item => item.classList.contains('ativo'));

console.log(filtro())
console.log(li2);

const numeros = [33, 232, 33, 434, 54, 542, 4];
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda,);

console.log(acelerarHonda(300, 20));

console.log(carro);