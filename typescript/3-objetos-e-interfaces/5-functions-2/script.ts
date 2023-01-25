function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") return valor.trim().toLowerCase();
  else return valor.map((item) => item.trim().toLowerCase());
}

console.log(normalizar(" Produto "));
console.log(normalizar(["  Banana ", "  UVa  "]));

function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$("a")?.click();
$("video")?.volume;
$(".item");
