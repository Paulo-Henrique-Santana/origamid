debugger
function contagem() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total)
  }
}

const ativarIncremento = contagem();
ativarIncremento();
ativarIncremento();
ativarIncremento();
ativarIncremento();
ativarIncremento();