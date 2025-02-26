document.addEventListener("DOMContentLoaded", function () {
  const offersList = document.getElementById("offers-list");
  const subscriptionPlans = document.getElementById("subscription-plans");

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
                <button class="subscribe-btn" data-plan="${sub.name}">Subscribe</button>
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
