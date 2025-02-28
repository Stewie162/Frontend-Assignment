document.addEventListener("DOMContentLoaded", function () {
  const equipmentGrid = document.getElementById("equipment-grid");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const menuLinks = document.querySelectorAll("#main-nav ul li a");
  const body = document.body;

  const equipments = [
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
      description:
        "Effortless cold brew preparation with smooth, low-acid flavor.",
      usage:
        "Add coffee grounds, fill with cold water, brew for 12-24 hours, and enjoy.",
      image: "images/automatic-coffee-maker-cold-brew.jpg",
      price: 79.99,
    },
    {
      name: "Coffee brewing equiment",
      description:
        "Essential tools for precision brewing and rich coffee flavors.",
      usage:
        "Select your preferred brewing method, measure coffee and water, and brew to perfection.",
      image: "images/coffee-brewing-equiment-and-essentials.jpg",
      price: 79.99,
    },
    {
      name: "Coffee grinder and burr mill grinder",
      description:
        "Precision grinding for uniform coffee grounds and enhanced flavor extraction.",
      usage:
        "Select grind size, add beans to hopper, and grind to the desired consistency.",
      image: "images/coffee-grinder-and-burr-mill-grinder.jpeg",
      price: 79.99,
    },
    {
      name: "Coffee Grinder",
      description:
        "Efficient grinding for fresh, flavorful coffee with adjustable settings.",
      usage:
        "Choose grind size, add beans to hopper, and grind to desired consistency.",
      image: "images/coffee-grinder.jpg",
      price: 79.99,
    },
    {
      name: "Coffee Machine",
      description:
        "Brews rich, aromatic coffee with ease, offering customizable settings.",
      usage:
        "Add water, insert coffee grounds or pods, select settings, and start brewing.",
      image: "images/coffee-machine.png",
      price: 79.99,
    },
    {
      name: "Cold brew coffee maker",
      description: "Smooth, low-acid cold brew made effortlessly at home.",
      usage:
        "Add coarse coffee grounds, pour cold water, steep for 12-24 hours, then serve.",
      image: "images/cold-brew-coffee-maker.jpg",
      price: 79.99,
    },
    {
      name: "Lattee maker",
      description:
        "Create creamy, barista-quality lattes with rich espresso and steamed milk.",
      usage:
        "Brew espresso, froth milk to desired texture, and combine for a perfect latte.",
      image: "images/lattee-maker.jpg",
      price: 79.99,
    },
    {
      name: "Oval cold brew maker",
      description:
        "Brew smooth, low-acid cold coffee with a sleek, oval design.",
      usage:
        "Add coarse coffee grounds, pour cold water, steep for 12-24 hours, then serve chilled.",
      image: "images/oval-cold-brew-maker.jpg",
      price: 79.99,
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

  function renderEquipment(equipment) {
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
                <div class="price-btn-container">
                  <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
                <div class="btn-container">
                    <button class="btn" data-name="${item.name}" data-price="${
        item.price
      }"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
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

  function searchBrewingEquipment() {
    const searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm);
    const filteredBrewingEquipment = equipments.filter(
      (equiment) =>
        equiment.name.toLowerCase().includes(searchTerm) ||
        equiment.description.toLowerCase().includes(searchTerm) ||
        equiment.usage.toLowerCase().includes(searchTerm)
    );

    renderEquipment(filteredBrewingEquipment);
    document.getElementById("clear-search").style.display =
      searchTerm.length > 0 ? "block" : "none";
    animateCards();
  }

  searchBtn.addEventListener("click", searchBrewingEquipment);
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchBrewingEquipment();
    }
  });

  const searchContainer = document.querySelector(".search-container");
  if (!document.getElementById("clear-search")) {
    const clearBtn = document.createElement("button");
    clearBtn.id = "clear-search";
    clearBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    clearBtn.style.display = "none";
    searchContainer.insertBefore(clearBtn, searchBtn);

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      renderEquipment(equipments);
      animateCards();
    });
  }

  renderEquipment(equipments);
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
    showNotification(`${name} added to cart!`);
  }

  function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    // Add to body
    document.body.appendChild(notification);

    // Show with animation
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
});
