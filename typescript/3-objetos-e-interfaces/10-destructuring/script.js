"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco?.toFixed();
}
handleData({ nome: "Notebook", preco: 200 });
function handleClick1({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement)
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
    console.log(pageX);
}
function handleClick({ currentTarget }) {
    if (currentTarget instanceof HTMLElement)
        currentTarget.innerHTML = `<h1>Mouse click em x: 1</h1>`;
}
document.documentElement.addEventListener("click", handleClick);
document.documentElement.addEventListener("touchstart", handleClick);
function comparar(tipo, ...numeros) {
    if (tipo === "menor")
        return Math.min(...numeros);
    if (tipo === "maior")
        return Math.max(...numeros);
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 20, 10, 30, 1));
console.log(comparar("maior", 3, 4, 5, 6, 7, 20, 10, 30, 1));
