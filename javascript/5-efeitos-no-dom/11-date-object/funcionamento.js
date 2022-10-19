const agora = new Date();
const futuro = new Date('Dec 24 2018 23:59')

console.log(agora.getMonth());

console.log(futuro);

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora);