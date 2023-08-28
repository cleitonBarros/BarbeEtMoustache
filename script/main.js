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

Window.sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  durantion: 2500,
  reset: true,
});
ScrollReveal().reveal("#home, #about, #service",{interval:600});

