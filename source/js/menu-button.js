let nav = document.querySelector(".nav");
let navBtn = document.querySelector(".nav__button");

nav.classList.remove("nav--nojs");

navBtn.addEventListener("click", function() {
  if (nav.classList.contains("nav--close")) {
    nav.classList.remove("nav--close");
    nav.classList.add("nav--open");
  } else {
    nav.classList.remove("nav--open");
    nav.classList.add("nav--close");
  }
})
