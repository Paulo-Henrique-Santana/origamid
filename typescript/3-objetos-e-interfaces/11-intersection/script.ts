type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

type Livro = {
  paginas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

handleProdutoCarro({ rodas: 4, portas: 5, preco: 300000 });

type TipoCarro = {
  rodas: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {}

interface Window {
  userId: number;
}

window.userId = 200;
