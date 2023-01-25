const btnMobile = document.getElementById("btn-mobile");

function toggleMenuMobile(event: PointerEvent) {
  const nav = document.getElementById("nav");
  const button = event.currentTarget;
  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Abrir Menu");
    } else {
      nav.classList.add("active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Fechar Menu");
    }
  }
}

btnMobile?.addEventListener("pointerdown", toggleMenuMobile);
