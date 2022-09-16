// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function toggleAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((link) => link.classList.remove('ativo'));
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => link.addEventListener('click', toggleAtivo));


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos = document.querySelectorAll('body *');

function exibirElemento(event) {
  console.log(event.currentTarget);
}

elementos.forEach((elemento) => elemento.addEventListener('click', exibirElemento));


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removerElemento(event) {
  event.target.remove();
}

elementos.forEach((elemento) => elemento.addEventListener('click', removerElemento));

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const html = document.querySelector('html');

function aumentarFonte(event) {
  if (event.key === 't') {
    if (html.style.fontSize === '150%') {
      html.style.fontSize = '100%';
    } else {
      html.style.fontSize = '150%';
    }
  }
}

window.addEventListener('keyup', aumentarFonte);
