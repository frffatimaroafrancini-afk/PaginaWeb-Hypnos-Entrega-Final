const toggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
