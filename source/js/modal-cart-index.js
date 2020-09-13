let btnGood = document.querySelector(".button--good");
let catalogCart = document.querySelector(".catalog-good__link");
let modalCart = document.querySelector(".modal-cart");
let modalOverlay = document.querySelector(".modal-overlay");
let body = document.querySelector("body");



btnGood.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-cart--opened");
  body.classList.add("modal-overlay__fixed")
})

modalOverlay.addEventListener("click", function(evt) {
  if (!evt.target === modalCart) {
    modalCart.classList.remove("modal-cart--opened");
  }
}


)

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(modalCart.classList.contains("modal-cart--opened")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-cart--opened");
    }
  }
})

// modalOverlay.addEventListener("click", function(evt) {
//   if(modalCart.classList.contains("modal-cart--opened")) {
//     evt.preventDefault();
//     modalCart.classList.remove("modal-cart--opened");
//   }
// })
