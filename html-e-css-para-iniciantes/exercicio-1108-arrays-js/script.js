const links = document.querySelectorAll('nav a');

function ativarLink(item) {
  if (item.href === document.location.href) {
    item.style.backgroundColor = 'black';
    item.style.color = 'white';
  }
}

links.forEach(ativarLink);