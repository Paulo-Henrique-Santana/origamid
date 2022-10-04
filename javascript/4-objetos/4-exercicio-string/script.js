// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let somaTaxa = 0;
let somaRecebimento = 0;

transacoes.forEach((transacao) => {
  if (transacao.descricao.slice(0, 4) === 'Taxa') {
    somaTaxa += +transacao.valor.slice(2);
  } else {
    somaRecebimento += +transacao.valor.slice(2);
  }
});

console.log(somaTaxa);
console.log(somaRecebimento);

// Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);

// Substitua todos os span's por a's

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlNovo = html.split('span').join('a');
console.log(htmlNovo);

// Retorne o último caracter da frase

const frase = 'Melhor do ano!';

console.log(frase[frase.length - 1]);

// Retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let qtTaxas = 0

transacoes2.forEach((transacao) => {
  if (transacao.toLowerCase().trim().slice(0, 4) === 'taxa') {
    ++qtTaxas;
  }
});

console.log(qtTaxas);