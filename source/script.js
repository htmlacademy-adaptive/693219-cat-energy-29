let navMain = document.querySelector(".main-header__nav");
let mainToggle = document.querySelector(".main-header__toggle");

navMain.classList.remove("main-nav--nojs");

mainToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
