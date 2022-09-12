var pessoa = {
  nome: 'André',
  idade: 28
}

console.log(pessoa.nome);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());
console.table(quadrado);

var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    return this.height / 2
  }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function() {
  console.log('Escondi');
}

var bg = menu.backgroundColor;