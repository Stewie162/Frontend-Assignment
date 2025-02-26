document.addEventListener("DOMContentLoaded", function () {
  const coffeeGrid = document.getElementById("coffee-grid");
  const searchInput = document.getElementById("coffee-search");
  const searchBtn = document.getElementById("search-btn");

  const coffees = [
    {
      name: "Signature Blend",
      description: "Our award-winning house blend",
      image: "images/coffee-1.jpg",
    },
    {
      name: "Single Origin Ethiopian",
      description: "Bold and fruity flavors",
      image: "images/coffee-2.jpg",
    },
    {
      name: "Colombian Supremo",
      description: "Smooth and well-balanced",
      image: "images/coffee-3.jpg",
    },
    {
      name: "Dark Roast Espresso",
      description: "Rich and intense",
      image: "images/coffee-4.jpg",
    },
    {
      name: "Decaf Blend",
      description: "Full-flavored without the caffeine",
      image: "images/coffee-5.jpg",
    },
    {
      name: "Organic Fair Trade",
      description: "Ethically sourced and delicious",
      image: "images/coffee-6.jpg",
    },
  ];

  function renderCoffees(coffeeList) {
    coffeeGrid.innerHTML = "";
    coffeeList.forEach((coffee) => {
      const coffeeCard = document.createElement("div");
      coffeeCard.classList.add("product-card");
      coffeeCard.innerHTML = `
                <img src="${coffee.image}" alt="${coffee.name}">
                <h3>${coffee.name}</h3>
                <p>${coffee.description}</p>
            `;
      coffeeGrid.appendChild(coffeeCard);
    });
  }

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
        coffee.description.toLowerCase().includes(searchTerm)
    );

    renderCoffees(filteredCoffees);
    animateCards();
  }

  searchBtn.addEventListener("click", searchCoffees);
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchCoffees();
    }
  });

  renderCoffees(coffees);
  animateCards();
});
