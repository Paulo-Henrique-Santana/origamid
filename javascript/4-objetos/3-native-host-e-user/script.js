// Liste 5 objetos nativos

String, Number, Function, Object, Array

// Liste 5 objetos do browser

HTMLElement, NodeList, Document, Window, HTMLCollection

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (document.webkitHidden !== undefined) {
  console.log('Existe');
} else {
  console.log('Não existe');
}