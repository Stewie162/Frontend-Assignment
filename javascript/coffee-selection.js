document.addEventListener("DOMContentLoaded", function () {
  const coffeeGrid = document.getElementById("coffee-grid");
  const searchInput = document.getElementById("coffee-search");
  const searchBtn = document.getElementById("search-btn");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const menuLinks = document.querySelectorAll("#main-nav ul li a");
  const body = document.body;

  const coffees = [
    {
      name: "Signature Blend",
      description:
        "Our award-winning house blend with notes of chocolate and caramel",
      image: "images/signature-blend.jpg",
      price: 16.99,
      origin: "Multi-region",
    },
    {
      name: "Single Origin Ethiopian",
      description:
        "Bold and fruity flavors with bright acidity and floral notes",
      image: "images/single-origin.png",
      price: 18.99,
      origin: "Yirgacheffe, Ethiopia",
    },
    {
      name: "Colombian Supremo",
      description: "Smooth and well-balanced with hints of nuts and citrus",
      image: "images/colombian-supremo.jpg",
      price: 17.99,
      origin: "Huila, Colombia",
    },
    {
      name: "Dark Roast Espresso",
      description:
        "Rich and intense with a velvety crema and chocolate undertones",
      image: "images/dark-roast-espresso.jpeg",
      price: 15.99,
      origin: "Brazil & Indonesia",
    },
    {
      name: "Decaf Blend",
      description:
        "Full-flavored without the caffeine, featuring notes of caramel and nuts",
      image: "images/decaf-blend.jpg",
      price: 16.99,
      origin: "Multi-region",
    },
    {
      name: "Organic Fair Trade",
      description:
        "Ethically sourced and delicious with a balanced flavor profile",
      image: "images/organic-fair.jpg",
      price: 19.99,
      origin: "Peru",
    },
    {
      name: "Sumatra Mandheling",
      description: "Earthy and full-bodied with low acidity and herbal notes",
      image: "images/sumatra-mandheling.jpeg",
      price: 18.99,
      origin: "Sumatra, Indonesia",
    },
    {
      name: "Costa Rican Tarrazu",
      description:
        "Bright and clean with notes of honey, citrus, and a crisp finish",
      image: "images/costa-rican-tarrazu.jpg",
      price: 17.99,
      origin: "Tarrazu, Costa Rica",
    },
    {
      name: "Kenyan AA",
      description:
        "Bold and complex with wine-like acidity and blackcurrant notes",
      image: "images/kenyan-aa.jpg",
      price: 20.99,
      origin: "Kenya",
    },
    {
      name: "Guatemalan Antigua",
      description:
        "Medium-bodied with spicy and smoky notes and a chocolate finish",
      image: "images/guatemalan-antigua.png",
      price: 18.99,
      origin: "Antigua, Guatemala",
    },
    {
      name: "Jamaica Blue Mountain",
      description:
        "Smooth and mild with a clean taste and subtle floral sweetness",
      image: "images/jamaica-blue-mountain.jpg",
      price: 29.99,
      origin: "Jamaica",
    },
    {
      name: "Hawaiian Kona",
      description:
        "Delicate and aromatic with notes of brown sugar and tropical fruits",
      image: "images/hawaiian-kona.jpeg",
      price: 24.99,
      origin: "Hawaii, USA",
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

  function renderCoffees(coffeeList) {
    coffeeGrid.innerHTML = "";
    coffeeList.forEach((coffee) => {
      const coffeeCard = document.createElement("div");
      coffeeCard.classList.add("product-card");
      coffeeCard.innerHTML = `
        <img src="${coffee.image}" alt="${coffee.name}">
        <h3>${coffee.name}</h3>
        <p class="origin">${coffee.origin}</p>
        <p>${coffee.description}</p>
        <div class="product-footer">
          <span class="price">$${coffee.price.toFixed(2)}</span>
          <button class="btn" data-name="${coffee.name}" data-price="${
        coffee.price
      }" data-image="${coffee.image}">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      `;
      coffeeGrid.appendChild(coffeeCard);
    });

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  }

  function addToCart(event) {
    const button = event.currentTarget;
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");

    // Get current cart from localStorage or initialize empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add item to cart
    cart.push({
      name,
      price,
      image,
    });

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show confirmation message
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

  // Import gsap (GSAP) library
  const gsap = window.gsap;

  function animateCards() {
    gsap.from(".product-card", {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  function searchCoffees() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCoffees = coffees.filter(
      (coffee) =>
        coffee.name.toLowerCase().includes(searchTerm) ||
        coffee.description.toLowerCase().includes(searchTerm) ||
        coffee.origin.toLowerCase().includes(searchTerm)
    );

    renderCoffees(filteredCoffees);
    document.getElementById("clear-search").style.display =
      searchTerm.length > 0 ? "block" : "none";
    animateCards();
  }

  searchBtn.addEventListener("click", searchCoffees);
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchCoffees();
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
      renderCoffees(coffees);
      animateCards();
    });
  }

  renderCoffees(coffees);
  animateCards();
});
