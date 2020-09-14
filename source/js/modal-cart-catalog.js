let catalogCart = document.querySelectorAll(".catalog-good__icon");
let modalCart = document.querySelector(".modal-cart");
let modalOverlay = document.querySelector(".modal-overlay");
let body = document.querySelector("body");

//Открываю модальное окно и оверлей по клику на корзину
for(let cart of catalogCart) {
  cart.addEventListener("click", function(evt) {
    console.log(evt);
    evt.preventDefault();
    modalCart.classList.add("modal-cart--opened");
    body.classList.add("modal-overlay__fixed");
  })
};

//Закрываю модальное окно и оверлей по клику на оверлей
modalOverlay.addEventListener("click", function(evt) {
  if (evt.target === modalCart) {
    modalCart.classList.remove("modal-cart--opened");
    body.classList.remove("modal-overlay__fixed")
  }
});

//Закрываю модальное окно и оверлей по нажатию ESC
window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(modalCart.classList.contains("modal-cart--opened")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-cart--opened");
    }
  }
});
