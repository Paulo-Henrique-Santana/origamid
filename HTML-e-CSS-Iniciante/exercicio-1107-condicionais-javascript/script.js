const botao = document.querySelector('button');
const total = document.querySelector('div');

function somar() {
  let valor = Number(total.innerText) + 1;
  if (valor < 10) {
    total.innerText = valor;
  } else {
    console.log('Valor limite atingido');
  }
}

if (botao) {
  botao.addEventListener('click', somar);
}