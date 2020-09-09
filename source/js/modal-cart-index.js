var btnGood = document.querySelector(".button--good");
var catalogCart = document.querySelector(".catalog-good__link");
var modalCart = document.querySelector(".modal-cart");
var modalOverlay = document.querySelector(".modal-overlay");


btnGood.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalCart.classList.add("modal-cart--opened");
})

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
