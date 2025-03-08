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
      image: "images/coffee-tasting-event.jpg",
      time: "14:00",
      description:
        "Embark on a journey of taste and aroma with our interactive Coffee Tasting Workshop! This session is designed to help you develop a refined palate and recognize the diverse flavors found in different coffee beans. You will learn about various coffee origins, roasting techniques, and brewing styles that influence taste. Experience guided tastings where you'll identify notes of chocolate, caramel, citrus, floral, and nutty flavors in different coffee varieties. Our coffee specialists will introduce you to the professional 'cupping' method used by baristas and roasters worldwide. Whether you're a beginner or a seasoned coffee enthusiast, this workshop will deepen your appreciation for specialty coffee.",
    },
    {
      name: "Latte Art Masterclass",
      date: "2024-03-22",
      image: "images/latte-art-master-class.jpg",
      time: "10:00",
      description:
        "Unleash your inner barista with our immersive Latte Art Masterclass! Whether you're a beginner or an experienced coffee enthusiast, this hands-on workshop will teach you how to create beautiful and intricate latte art patterns like rosettas, tulips, and hearts. Our expert baristas will guide you through milk steaming techniques, proper frothing methods, and the science behind microfoam texture to achieve a smooth, silky consistency. You’ll also learn about the role of espresso extraction in achieving perfect designs. Get ready to elevate your coffee-making skills and impress your friends with visually stunning and delicious lattes!",
    },
    {
      name: "Home Brewing Techniques",
      date: "2024-04-05",
      image: "images/home-brewing-techniques.jpg",
      time: "15:00",
      description:
        "Unlock the secrets to brewing café-quality coffee from the comfort of your home! This hands-on workshop will guide you through the essential techniques and tools needed to make rich, flavorful coffee without a professional espresso machine. Learn about different brewing methods such as pour-over, French press, AeroPress, and Moka pot. Our coffee experts will teach you the importance of grind size, water temperature, and coffee-to-water ratios to perfect your brew. Whether you prefer a bold espresso-like taste or a smooth and aromatic pour-over, this session will help you master your favorite brewing technique and elevate your home coffee experience.",
    },
    {
      name: "Coffee Tasting Experience",
      date: "2024-04-19",
      image: "images/coffee-tasting-experience.jpg",
      time: "16:00",
      description:
        "Embark on a sensory adventure through the world of coffee! This guided coffee-tasting experience will introduce you to a variety of specialty coffee beans from different regions around the globe, each with unique flavors, aromas, and body profiles. You’ll learn the fundamentals of cupping, the standard method used by coffee professionals to evaluate quality and taste. Our experts will help you identify flavor notes such as chocolate, citrus, floral, and nutty undertones while explaining how factors like altitude, soil, and processing methods influence the final cup. Whether you're a casual drinker or an aspiring connoisseur, this event will refine your coffee palate and deepen your appreciation for fine coffee.",
    },
    {
      name: "Espresso Perfection Workshop",
      date: "2024-04-26",
      image: "images/espresso-perfection-workshop.jpg",
      time: "15:30",
      description:
        "Want to pull the perfect espresso shot every time? This in-depth workshop is designed for coffee lovers who want to master the art and science of espresso brewing. You’ll learn how to dial in your espresso using key variables like grind size, water pressure, temperature, and extraction time. Our instructors will demonstrate proper tamping techniques, the importance of dose consistency, and how to adjust variables to enhance sweetness, balance acidity, and reduce bitterness. Whether you use a home espresso machine or work in a café, this hands-on experience will help you develop precision brewing skills for consistently great-tasting espresso.",
    },
    {
      name: "Sustainable Coffee Farming Talk",
      date: "2024-05-03",
      image: "images/sustainable-coffee-farming.jpg",
      time: "17:00",
      description:
        "Join us for an eye-opening discussion on sustainability in the coffee industry. This talk will explore the environmental and social impact of coffee farming, the challenges faced by farmers, and innovative solutions that promote ethical sourcing and sustainable practices. Our expert guest speaker, a coffee farmer and sustainability advocate, will share insights on shade-grown coffee, organic farming, fair trade certification, and carbon-neutral production. Learn how your coffee choices as a consumer can contribute to environmental conservation and fair wages for farmers. Whether you’re a coffee professional or a conscious consumer, this session will inspire you to make more informed and responsible coffee choices.",
    },
    {
      name: "Cold Brew Creations",
      date: "2024-05-10",
      image: "images/cold-brew-creations.jpg",
      time: "13:00",
      description:
        "Discover the magic of cold brew coffee and learn how to craft delicious, smooth, and refreshing drinks at home! This session will teach you the step-by-step process of making cold brew, including selecting the right coffee beans, grind size, brewing ratios, and steeping times. You’ll also explore creative variations such as vanilla-infused cold brew, nitro cold brew, and fruit-infused coffee for a refreshing twist. Our instructors will provide tips on serving, storing, and experimenting with flavors to customize your brew to perfection. Ideal for coffee lovers looking to enjoy a less acidic, naturally sweet coffee experience!",
    },
    {
      name: "Manual Brewing Methods",
      date: "2024-05-17",
      image: "images/manual-brewing-methods.jpg",
      time: "14:30",
      description:
        "Elevate your coffee experience by mastering the art of manual brewing! This hands-on session will introduce you to different brewing methods, including pour-over (V60, Chemex), French press, AeroPress, and siphon brewing. You’ll learn how to control key variables such as water temperature, brew time, and coffee-to-water ratios to achieve a perfectly balanced cup. Our expert baristas will guide you through the nuances of each method, helping you understand how different techniques impact extraction, body, and flavor clarity. Whether you enjoy bold and rich coffee or prefer light and aromatic brews, this workshop will help you find the perfect method that suits your taste preferences.",
    },
    {
      name: "Coffee and Dessert Pairing",
      date: "2024-05-24",
      image: "images/coffee-dessert-pairing.jpg",
      time: "15:00",
      description:
        "Indulge in the perfect harmony of coffee and desserts in this immersive pairing experience! This session will teach you how to pair different coffee profiles with complementary desserts to enhance flavors and create an unforgettable tasting experience. Learn why fruity Ethiopian coffee pairs beautifully with citrus-based pastries, or why a rich, chocolatey espresso enhances the depth of a dark chocolate mousse. Our coffee and pastry experts will guide you through a curated tasting menu, helping you identify the flavor interactions between coffee and sweet treats. Whether you’re a coffee aficionado or a dessert lover, this event will elevate your appreciation for both!",
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
                <div>
                  <h3>${event.name}</h3>
                  <p><strong>Date:</strong> ${event.date}</p>
                  <p><strong>Time:</strong> ${event.time}</p>
                  <p class="event-card-desc"><strong>What You'll Learn: </strong>${event.description}</p>
                </div>
                <div class="event-card-img">
                  <img src="${event.image}" alt="${event.name}" />
                </div>
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
