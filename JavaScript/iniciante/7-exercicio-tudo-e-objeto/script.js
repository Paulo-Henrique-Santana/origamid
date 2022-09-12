// nomeie 3 propriedades ou métodos de strings
var nome = 'Paulo';
var nomeMaiusculo = nome.toUpperCase();
var nomeMinusculo = nome.toLowerCase();
var nomeTamanho = nome.length;

console.log(nome, nomeMaiusculo, nomeMinusculo, nomeTamanho);

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {console.log('clicou')});
btn.classList.add('.ativo');
btn.classList.remove('.ativo');
btn.classList.toggle('.ativo');

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
