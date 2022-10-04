const pessoa = new Object({
  nome: 'André'
})

console.log(pessoa);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro).init('Honda');
console.log(honda.acelerar());

const ferrari = Object.create(carro).init('Ferrari');
console.log(honda.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  }
}

const moto = {
  capacete: true
}

Object.assign(moto, funcaoAutomovel);

Object.defineProperties(moto, {
  rodas: {
    enumerable: true,
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + ' Total Rodas';
    }
  }
})

delete moto.capacete;
console.log(moto);

const innerheightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

console.log(Object.getOwnPropertyNames(Array.prototype));

const frutas = ['Banana', 'Uva'];

console.log(Object.getPrototypeOf(''));
console.log(Array.prototype);

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

const novaFruta = frutas1;

console.log(Object.is(frutas1, novaFruta));

novaFruta[0] = 'Uva';

console.log(frutas1);

const carro2 = {
  marca: 'Ford',
  ano: 2018
}

Object.freeze(carro2);
carro2.portas = 4;
delete carro2.marca;

carro2.marca = 'Honda';

console.log(carro2);
console.log(Object.isFrozen(carro2));

const frase = 'Oi frase';
const somar = function() {
  return a + b;
};

const carro3 = {
  marca: 'Ford'
}
console.log(carro.toString());

console.log(Object.prototype.toString.call(frase));