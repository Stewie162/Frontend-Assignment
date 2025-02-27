document.addEventListener("DOMContentLoaded", function () {
  const eventsList = document.getElementById("events-list");
  const eventSelect = document.getElementById("event-select");
  const registrationForm = document.getElementById("event-registration");
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const navMenu = document.querySelector("#main-nav ul");
  const menuLinks = document.querySelectorAll("#main-nav ul li a");
  const body = document.body;

  const events = [
    {
      name: "Coffee Tasting Workshop",
      date: "2024-03-15",
      time: "14:00",
      description: "Learn to identify different coffee flavors and aromas.",
    },
    {
      name: "Latte Art Masterclass",
      date: "2024-03-22",
      time: "10:00",
      description:
        "Create beautiful designs in your lattes with our expert barista.",
    },
    {
      name: "Home Brewing Techniques",
      date: "2024-04-05",
      time: "15:00",
      description:
        "Discover the secrets to brewing cafe-quality coffee at home.",
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

  function renderEvents() {
    eventsList.innerHTML = "";
    eventSelect.innerHTML = '<option value="">Select an event</option>';

    events.forEach((event, index) => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");
      eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p>${event.description}</p>
            `;
      eventsList.appendChild(eventCard);

      const option = document.createElement("option");
      option.value = index;
      option.textContent = event.name;
      eventSelect.appendChild(option);
    });
  }

  // Declare gsap if it's not already available globally
  const gsap = window.gsap;

  function animateCards() {
    gsap.from(".event-card", {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  renderEvents();
  animateCards();

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const selectedEvent = events[eventSelect.value];

    if (selectedEvent) {
      // In a real application, you would send this data to a server
      console.log("Registration submitted:", {
        firstName,
        lastName,
        email,
        event: selectedEvent.name,
      });
      alert(`Thank you for registering for ${selectedEvent.name}!`);
      registrationForm.reset();
    } else {
      alert("Please select an event.");
    }
  });
});
