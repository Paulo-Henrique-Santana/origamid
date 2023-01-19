"use strict";
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, "Taxas", 30, "Produto", 50, 3];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
console.log(filtrarValores(valores));
console.log(maiorQue10(numeros));
const dados = [
    ["senhor dos aneis", 80],
    ["a guerra dos tronos", 120],
];
