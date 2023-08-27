const menu = document.querySelector(".menu-hamburger");
const closemenu = document.querySelector(".menu-close");
const $ = document.querySelector.bind(document); 

var windowWidth = window.innerWidth;
const element="body"
let largura = $(element).clientWidth;
console.log(largura)

menu.addEventListener("click", () => {
  menu.classList.add("hidden");
  closemenu.classList.add("active");
});
closemenu.addEventListener("click", () => {
  closemenu.classList.remove("active");
  menu.classList.remove("hidden");
});
