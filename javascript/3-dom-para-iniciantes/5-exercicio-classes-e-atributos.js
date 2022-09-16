// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item) => {
  item.classList.add('ativo');
  console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
  if (index !== 0) {
    item.classList.remove('ativo');
  }
  console.log(item);
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  console.log(img, img.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"');

linkExterno.setAttribute('href', 'https://www.google.com');
console.log(linkExterno);