// window.alert('teste');

const href = window.location.href;

console.log(href);

if (href === 'http://127.0.0.1:5500/1-o-que-e-o-dom/index.html') {
  console.log('É igual');
}

const h1 = document.querySelector('h1');
console.log(h1);

const h1Classes = h1.classList;
console.log(h1Classes);

function teste() {
  console.log('Clicou em ', h1);
}

h1.addEventListener('click', teste);