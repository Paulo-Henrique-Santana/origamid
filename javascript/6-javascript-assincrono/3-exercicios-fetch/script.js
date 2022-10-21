// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.querySelector('#cep');
const btnCep = document.querySelector('#btn-cep');
const resultCep = document.querySelector('#resultado-cep');

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscarCep(cep);
}

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultCep.innerText = body;
  });
}

btnCep.addEventListener('click', handleClick)

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorBitcoin = document.querySelector('#bitcoin');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(i => {
    valorBitcoin.innerText = ('R$ ' + i.BRL.buy).replace('.',',');
  })
}

setInterval(fetchBtc, 30000)


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piada = document.querySelector('#piada');
const botao = document.querySelector('#btn-piada');

function chamarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(json => {
    piada.innerText = json.value;
  });
}

botao.addEventListener('click', chamarPiada);

chamarPiada();