// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse() {
  document.body.classList.toggle('ativo');
}
setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciartempo);
pausar.addEventListener('click', pausartempo);
pausar.addEventListener('dblclick', reiniciartempo);

let i = 0;
let timer;

function iniciartempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausartempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function reiniciartempo() {
  tempo.innerText = 0
  i = 0;
}