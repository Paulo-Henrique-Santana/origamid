import Slide from "./Slide.js";

const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");

if (container && elements && controls && elements.children.length) {
  const slide = new Slide(
    container,
    Array.from(elements.children),
    controls,
    3000
  );
}
