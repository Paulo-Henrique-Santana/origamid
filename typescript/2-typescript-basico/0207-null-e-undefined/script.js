"use strict";
const button = document.querySelector("button");
const config = localStorage.getItem("config");
if (button !== null)
    button.click();
if (button)
    button.click();
console.log(typeof null);
button?.click();
let total;
function teste() { }
console.log(typeof total);
if (total)
    console.log("Total foi definido");
else
    console.log("Total não foi definido");
const jogo = {
    nome: "Ragnarok",
};
const livro = {};
if (jogo.nome)
    jogo.nome.toLowerCase();
livro.nome?.toLowerCase();
