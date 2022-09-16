// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');
const primeiraImgTop = primeiraImg.offsetTop;
console.log(primeiraImgTop);

// Retorne a soma da largura de todas as imagens

function somarImagens() {
  const imgs = document.querySelectorAll('img');
  let somaLarguraimgs = 0;
  imgs.forEach((img) => somaLarguraimgs += img.clientWidth);
  console.log(somaLarguraimgs);
}

window.onload = function() {
  somarImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link) => {
  if (link.clientWidth >= 48 && link.clientHeight >= 48) {
    console.log(`${link} Possui o mínimo recomendado`)
  } else {
    console.log(`${link} Não possui o mínimo recomendado`)
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 600px)').matches;

if (small) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
  console.log(menu);
}

