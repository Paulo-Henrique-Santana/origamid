"use strict";
// const button = document.querySelector("button");
// function handleClick(event: PointerEvent) {
//   console.log(event.pageX);
// }
// button?.addEventListener("pointerdown", handleClick);
// function handleScroll(event: Event) {
//   console.log(event);
// }
// window.addEventListener("scroll", handleScroll);
// function ativarMenu(event: Event) {
//   if (event instanceof MouseEvent) console.log(event.pageX);
//   if (event instanceof TouchEvent) console.log(event.touches[0].pageX);
// }
// document.documentElement.addEventListener("mousedown", ativarMenu);
// document.documentElement.addEventListener("touchstart", ativarMenu);
// window.addEventListener("keydown", ativarMenu);
// const button = document.querySelector("button");
// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }
// button?.addEventListener("click", handleClick);
const button = document.querySelector("button");
function handleClick(event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement)
        console.log(elemento.innerText);
}
button?.addEventListener("click", handleClick);
