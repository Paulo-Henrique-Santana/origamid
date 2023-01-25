"use strict";
let K;
const chave = "novo";
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return { x, y };
};
function selecionar(seletor) {
    return document.querySelector(seletor);
}
selecionar("a")?.href;
selecionar("video")?.volume;
