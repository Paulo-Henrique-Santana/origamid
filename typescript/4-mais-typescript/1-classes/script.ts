console.log(document.constructor);

class Produto {
  readonly tipo = "produto";
  public nome: string;
  protected preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  getPreco() {
    return Produto.transformarPreco(this.preco);
  }
  static transformarPreco(preco: number) {
    return `R$ ${preco}`;
  }
}

class Livro extends Produto {}

const livro = new Produto("O Senhor dos Anéis", 300);

console.log(livro.getPreco());
console.log(livro.nome);

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

class Circulo {
  readonly PI = Math.PI;
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100;
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
  }
}

const q1 = new Quadrado(10);

if (q1 instanceof Quadrado) {
  console.log(q1.getArea());
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
  if (n < 15) {
    return new Quadrado(n);
  } else {
    return new Circulo(n);
  }
});

formas.forEach((forma) => {
  if (forma instanceof Quadrado) {
    console.log(forma.lados);
  }
  if (forma instanceof Circulo) {
    console.log(forma.raio);
  }
});
