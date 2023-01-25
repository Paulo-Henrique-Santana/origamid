"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4, 6);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("black");
const btn = document.querySelector("button");
btn?.click();
function isString(value) {
    if (typeof value === "string")
        return true;
}
console.log(isString("Teste"));
console.log(isString(200));
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(3);
}
