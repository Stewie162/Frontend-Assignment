document.addEventListener("DOMContentLoaded", function () {
  const equipmentGrid = document.getElementById("equipment-grid");

  const equipment = [
    {
      name: "Pour-Over Kit",
      description:
        "Perfect for home brewing, includes dripper, filters, and carafe.",
      usage:
        "Place filter in dripper, add ground coffee, and slowly pour hot water in circular motion.",
      image: "images/pour-over-kit.jpg",
      price: 39.99,
    },
    {
      name: "French Press",
      description: "Classic brewing method for rich, full-bodied coffee.",
      usage:
        "Add coarse ground coffee, pour hot water, steep for 4 minutes, then press plunger down.",
      image: "images/french-press.jpg",
      price: 29.99,
    },
    {
      name: "Espresso Machine",
      description: "Compact espresso maker for cafe-quality shots at home.",
      usage:
        "Fill water reservoir, add ground coffee to portafilter, tamp, and brew.",
      image: "images/espresso-machine.jpg",
      price: 199.99,
    },
    {
      name: "Burr Grinder",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/burr-grinder.jpg",
      price: 79.99,
    },
    {
      name: "Automatic coffee maker cold brew",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/automatic-coffee-maker-cold-brew.jpg",
      price: 79.99,
    },
    {
      name: "Coffee brewing equiment",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/coffee-brewing-equiment-and-essentials.jpg",
      price: 79.99,
    },
    {
      name: "Coffee grinder and burr mill grinder",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/coffee-grinder-and-burr-mill-grinder.jpeg",
      price: 79.99,
    },
    {
      name: "Coffee Griner",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/coffee-grinder.jpg",
      price: 79.99,
    },
    {
      name: "Coffee Machine",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/coffee-machine.png",
      price: 79.99,
    },
    {
      name: "Cold brew coffee maker",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/cold-brew-coffee-maker.jpg",
      price: 79.99,
    },
    {
      name: "Lattee maker",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/lattee-maker.jpg",
      price: 79.99,
    },
    {
      name: "Oval cold brew maker",
      description: "Consistent grind size for optimal flavor extraction.",
      usage:
        "Adjust grind size, add beans to hopper, and grind to desired amount.",
      image: "images/oval-cold-brew-maker.jpg",
      price: 79.99,
    },
  ];

  function renderEquipment() {
    equipmentGrid.innerHTML = "";
    equipment.forEach((item) => {
      const equipmentCard = document.createElement("div");
      equipmentCard.classList.add("product-card");
      equipmentCard.innerHTML = `
                <div class="img-container">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <h3 class="equipment-name">${item.name}</h3>
                <p class="text-justify">${item.description}</p>
                <p><strong>Usage:</strong> <p class="text-justify">${
                  item.usage
                }</p></p>
                <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
                <div class="btn-container">
                    <button class="btn" data-name="${item.name}" data-price="${
        item.price
      }"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
            `;
      equipmentGrid.appendChild(equipmentCard);
    });
  }

  function animateCards() {
    if (typeof gsap !== "undefined") {
      gsap.from(".product-card", {
        duration: 0.5,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power2.out",
      });
    } else {
      console.warn("GSAP is not loaded. Animation will not run.");
    }
  }

  renderEquipment();
  animateCards();

  // Add to cart functionality
  equipmentGrid.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
      const card = e.target.closest(".product-card");
      const name = e.target.getAttribute("data-name");
      const price = parseFloat(e.target.getAttribute("data-price"));
      const image = card.querySelector("img").src;
      addToCart(name, price, image);
    }
  });

  function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
});
