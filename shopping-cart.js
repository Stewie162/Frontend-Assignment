document.addEventListener("DOMContentLoaded", function () {
  const cartItems = document.getElementById("cart-items");
  const totalAmount = document.getElementById("total-amount");
  const checkoutBtn = document.getElementById("checkout-btn");

  function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length < 1) {
      const btn = document.querySelector(".btn");
      btn.classList.add("remove-btn");
    }

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

    totalAmount.textContent = total.toFixed(2);
  }

  function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  cartItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      removeItem(index);
    }
  });

  checkoutBtn.addEventListener("click", function () {
    alert("Checkout functionality would be implemented here.");
    // Clear the cart after checkout
    localStorage.removeItem("cart");
    renderCart();
  });

  renderCart();
});
