document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const totalAmount = document.getElementById("total-amount");
  const checkoutBtn = document.getElementById("checkout-btn");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const menuLinks = document.querySelectorAll("#main-nav ul li a");
  const body = document.body;

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

  function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length < 1) {
      cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
      const btn = document.querySelector(".btn");
      btn.classList.add("remove-btn");
    } else {
      cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          </div>
          <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
      });
    }

    totalAmount.textContent = total.toFixed(2);
  }

  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = Number.parseInt(e.target.getAttribute("data-index"));
      removeItem(index);
    }
  });

  checkoutBtn.addEventListener("click", () => {
    alert("Checkout functionality would be implemented here.");
    // Clear the cart after checkout
    localStorage.removeItem("cart");
    renderCart();
  });

  renderCart();
});
