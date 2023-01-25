"use strict";
const produto1 = ["Notebook", 2500];
const produto2 = ["Notebook", 2500];
produto2[0].toLocaleLowerCase();
produto2[1].toFixed();
if (typeof produto1[0] === "string") {
    console.log(produto1[0].toLocaleLowerCase());
}
const [nome, preco] = produto2;
nome;
preco;
function getText(selector) {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
}
const button = getText("button");
if (button) {
    button[0].classList;
}
console.log(button);
