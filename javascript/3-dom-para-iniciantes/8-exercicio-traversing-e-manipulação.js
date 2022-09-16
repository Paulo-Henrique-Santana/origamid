// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const rodape = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

rodape.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const dl = document.querySelector('.faq-lista');
const primeiroDt = dl.children[0];

console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT

const primeiroDd = primeiroDt.nextElementSibling;

console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');

faq.innerHTML = animais.innerHTML;


