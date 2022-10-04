const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas);

const primeiraComida = comidas.shift();
console.log(primeiraComida);
console.log(comidas);

const ultimaComida = comidas.pop();
console.log(ultimaComida);
console.log(comidas);

comidas.push('Arroz');
console.log(comidas);

comidas.unshift('Peixe', 'Arroz');
console.log(comidas);
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

let estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
console.log(estudantes);
estudantes.sort();
console.log(estudantes);
estudantes.reverse();
console.log(estudantes);
console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
html = html.split('section').join('ul').split('div').join('li');
console.log(html);
// Substitua section por ul e div com li,
// utilizando split e join

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const copiaCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(copiaCarros);
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
