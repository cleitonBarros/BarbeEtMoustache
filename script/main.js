const menu = document.querySelector(".menu-hamburger");
const closemenu = document.querySelector(".menu-close");

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  closemenu.classList.add("active");
});
closemenu.addEventListener("click", () => {
  closemenu.classList.remove("active");
  menu.classList.remove("hidden");
});

ScrollReveal({
  distance: "60px",
  duration: 1500,
  reset: true,
});
ScrollReveal().reveal(".title", { delay: 300, origin: "top" });
ScrollReveal().reveal(".paragraph", { delay: 450, origin: "left" });
ScrollReveal().reveal(".botao", { delay: 550, origin: "bottom" });
ScrollReveal().reveal(".image", { delay: 700, origin: "right" });
ScrollReveal().reveal(".img-2", { delay: 600, origin: "bottom" });
ScrollReveal().reveal(".card", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".banner, .marquee", {
  delay: 300,
  origin: "bottom",
  scale: 1,
  distance: "0px",
  rotate: {
    x: 100,
    y: 0,
    z: 0
}
});
