document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const header = document.querySelector("header");
  const animatedTexts = document.querySelectorAll(".animate-text");
  const menuLinks = document.querySelectorAll("#main-nav ul li a");
  const body = document.body;

  // Toggle mobile menu
  mobileMenuIcon.addEventListener("click", () => {
    mobileMenuIcon.classList.toggle("open");
    navMenu.classList.toggle("show");
    body.classList.toggle("menu-open");
  });

  // Close menu when clicking on links
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        mobileMenuIcon.classList.remove("open");
        navMenu.classList.remove("show");
        body.classList.remove("menu-open");
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const isMenuOpen = navMenu.classList.contains("show");
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnMenuIcon = mobileMenuIcon.contains(event.target);

    if (isMenuOpen && !isClickInsideMenu && !isClickOnMenuIcon) {
      mobileMenuIcon.classList.remove("open");
      navMenu.classList.remove("show");
      body.classList.remove("menu-open");
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navMenu.classList.contains("show")) {
      mobileMenuIcon.classList.remove("open");
      navMenu.classList.remove("show");
      body.classList.remove("menu-open");
    }
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Animation on scroll
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
