
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}

function setInitialMenuState() {
  if (window.innerWidth <= 768) {
    mobileMenu.classList.add("hidden"); 
  } else {
    mobileMenu.classList.remove("hidden"); 
  }
}


if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      toggleMobileMenu();
    }
  });

  window.addEventListener("resize", setInitialMenuState);
  setInitialMenuState();
}
