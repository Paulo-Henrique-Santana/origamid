class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log('Acelerou rápido');
  }
  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, 'Gasolina', true);
const civic = new Veiculo(4);