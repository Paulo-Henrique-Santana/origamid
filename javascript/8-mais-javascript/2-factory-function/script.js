// function createButton(text) {
//   const numeroSecreto = 'fwaiofjweaifjeaw';

//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
  
//   return Object.freeze ({
//     text,
//     element
//   })
// }

// const btnComprar = createButton('Comprar');
// const btnVender = createButton('Vender');

// btnComprar.text = 'Novo texto';
// btnComprar.element = 'Novo texto';

// console.log(btnComprar, btnVender)

// function Pessoa(nome) {
//   if(!new.target)
//     return new Pessoa(nome);
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const designer = Pessoa('André');

// console.log(designer)