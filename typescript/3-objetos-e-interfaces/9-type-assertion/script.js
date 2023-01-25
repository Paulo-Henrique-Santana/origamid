"use strict";
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    return response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
    produto.nome;
}
handleProduto();
const video = document.querySelector("video");
video.volume;
document.querySelector("a").href = "https://ww.origamid.com";
const video1 = document.querySelector(".player");
const video2 = document.querySelector(".player");
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
video4.volume;
