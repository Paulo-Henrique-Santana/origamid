// import plugin from "./plugin.js";

// ativar o plugin
// plugin();

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(dados: any) {
  dados;
}

const link = document.querySelector("a");
if (link) {
  link.innerHTML = "Teste";
}

const teste = "ola";

function handleClick(this: HTMLElement) {
  console.log(this);
}

document.documentElement.addEventListener("click", handleClick);

function trocarModo(modo: string) {
  if (modo === "dark") {
    return "color: black";
  } else {
    return "color: white";
  }
}

trocarModo("light");

// function maiuscula(frase: string) {
//   const total = 100;
// }
