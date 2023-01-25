"use strict";
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true,
};
const servico1 = {
    nome: "Instalação",
};
function mostrarQuantidade(produto) {
    console.log(produto.quantidade + 20);
}
mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial(servico1);
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: "André",
};
if (typeof artigo.autor === "string") {
    artigo.autor.toLocaleLowerCase();
}
artigo.descricao;
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
// mostrarTitulo("teste");
mostrarTitulo({ titulo: "HTML e CSS" });
