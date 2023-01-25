const links = document.querySelectorAll(".link");

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "1px solid black";
}

links.forEach((link) => {
  if (link instanceof HTMLElement) ativarElemento(link);
});
