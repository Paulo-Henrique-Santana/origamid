function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2022 - ano,
    frase: nome + ' por ' + autor
  };
}

const objLivro = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(objLivro);