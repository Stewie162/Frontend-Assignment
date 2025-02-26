document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const header = document.querySelector("header");
  const animatedTexts = document.querySelectorAll(".animate-text");

  mobileMenuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  function checkVisibility() {
    animatedTexts.forEach((text) => {
      const rect = text.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.75) {
        text.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
