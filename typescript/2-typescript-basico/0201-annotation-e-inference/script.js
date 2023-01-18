"use strict";
let produto = 'Livro';
let preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5
};
const barato = preco < 400 ? true : 'produto caro';
function somar(a, b) {
    return `${a + b}`;
}
somar(4, 10);
// somar(4, '4')
const nintendo = {
    nome: 'Nintendo',
    preco: '2000'
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
