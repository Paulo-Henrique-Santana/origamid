// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');
const total = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(total);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const novoElemento = document.createElement(tag);
  classe ? novoElemento.classList.add(classe) : null;
  conteudo ? novoElemento.innerText = conteudo : null;
  return novoElemento;
}
console.log(criarElemento('h1', 'ativo', 'Título Principal'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novoH1 = criarElemento.bind(null, 'h1', 'titulo');
console.log(novoH1('Teste'));