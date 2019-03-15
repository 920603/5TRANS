const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector("#dropdown-menu");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  dropdownMenu.classList.toggle('dropdown-display');
});