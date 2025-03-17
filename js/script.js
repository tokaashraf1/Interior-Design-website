// const hamburger = document.querySelector(".hamburger");
// const mobileMenu = document.querySelector(".mobile-menu");

// function toggleMobileMenu() {
//   mobileMenu.classList.toggle("hidden");
// }

// if (hamburger && mobileMenu) {
//   hamburger.addEventListener("click", function () {
//     if (window.innerWidth <= 768) {
//       toggleMobileMenu();
//     }
//   });

//   window.addEventListener("resize", function () {
//     if (window.innerWidth > 768) {
//       mobileMenu.classList.remove("hidden"); // Ensures it's visible on large screens
//     } else {
//       mobileMenu.classList.add("hidden"); // Ensures it's closed when going back to mobile
//     }
//   });
// }


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
