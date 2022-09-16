var carro = 'Fusca';

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro();
console.log(carro);

if (true){
  const mes = 'Dezembro';
  console.log(mes);
}

// console.log(mes); //erro

{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}

console.log(carro2);
// console.log(ano); //erro

var i = 50;

for (let i = 0; i < 5; i++) {
  console.log(`Número ${i}`);
}

console.log(i);

const semana = 'Sexta';
//const semana = 'Quinta'; //erro
//semana = 'Quinta'; //erro

console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro'
} 

data.ano = 2019;
data.dia = 25;