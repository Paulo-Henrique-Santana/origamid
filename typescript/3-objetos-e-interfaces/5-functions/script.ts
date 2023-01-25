function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

somar(3, 4, 6);

const subtrair = (a: number, b: number) => a - b;

subtrair(4, 3);

type Callback = (event: MouseEvent) => void;

function pintarTela(cor: string) {
  document.body.style.background = cor;
}

pintarTela("black");

const btn = document.querySelector("button");

btn?.click();

function isString(value: any) {
  if (typeof value === "string") return true;
}

console.log(isString("Teste"));
console.log(isString(200));

function abortar(mensagem: string): never {
  throw new Error(mensagem);
}

// abortar("Um erro ocorreu");
// console.log("Tente novamente");

interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}
function calcular(forma: Quadrado) {
  forma.perimetro(3);
}
