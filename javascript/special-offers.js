document.addEventListener("DOMContentLoaded", function () {
  const offersList = document.getElementById("offers-list");
  const subscriptionPlans = document.getElementById("subscription-plans");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const menuLinks = document.querySelectorAll("#main-nav ul li a");
  const body = document.body;

  const offers = [
    {
      title: "Buy 2 Get 1 Free",
      description: "Purchase any two bags of coffee and get a third bag free!",
      code: "COFFEE3FOR2",
    },
    {
      title: "20% Off Brewing Equipment",
      description:
        "Get 20% off any brewing equipment with the purchase of a coffee subscription.",
      code: "BREW20OFF",
    },
    {
      title: "Free Shipping on Orders Over $50",
      description: "Enjoy free shipping on all orders over $50.",
      code: "FREESHIP50",
    },
  ];

  const subscriptions = [
    {
      name: "Coffee Lover",
      description: "One bag of our signature blend every month.",
      price: 19.99,
      frequency: "Monthly",
    },
    {
      name: "Coffee Enthusiast",
      description: "Two bags of your choice every month.",
      price: 34.99,
      frequency: "Monthly",
    },
    {
      name: "Coffee Connoisseur",
      description: "Three bags of premium single-origin coffees every month.",
      price: 49.99,
      frequency: "Monthly",
    },
  ];

  mobileMenuIcon.addEventListener("click", () => {
    console.log("open");
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

  function renderOffers() {
    offersList.innerHTML = "";
    offers.forEach((offer) => {
      const offerCard = document.createElement("div");
      offerCard.classList.add("offer-card");
      offerCard.innerHTML = `
                <h3>${offer.title}</h3>
                <p>${offer.description}</p>
                <p><strong>Use code:</strong> ${offer.code}</p>
            `;
      offersList.appendChild(offerCard);
    });
  }

  function renderSubscriptions() {
    subscriptionPlans.innerHTML = "";
    subscriptions.forEach((sub) => {
      const subCard = document.createElement("div");
      subCard.classList.add("subscription-card");
      subCard.innerHTML = `
                <h3>${sub.name}</h3>
                <p>${sub.description}</p>
                <p><strong>Price:</strong> $${sub.price} ${sub.frequency}</p>
                <div class="btn-container">
                  <button class="btn subscribe-btn" data-plan="${sub.name}">Subscribe</button>
                </div>
            `;
      subscriptionPlans.appendChild(subCard);
    });
  }

  // Declare gsap if it's not already available globally
  let gsap;
  if (typeof window.gsap !== "undefined") {
    gsap = window.gsap;
  } else {
    console.warn("GSAP library not found. Animation will not run.");
    gsap = {
      from: () => {}, // Dummy function to prevent errors
    };
  }

  function animateCards() {
    gsap.from(".offer-card, .subscription-card", {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  renderOffers();
  renderSubscriptions();
  animateCards();

  subscriptionPlans.addEventListener("click", function (e) {
    if (e.target.classList.contains("subscribe-btn")) {
      const planName = e.target.getAttribute("data-plan");
      alert(`Thank you for subscribing to the ${planName} plan!`);
    }
  });
});
