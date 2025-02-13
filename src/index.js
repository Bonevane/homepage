import "./styles.css";
import photography_bg_image from "./images/photography/leaves.jpg";
import home_bg_image from "./images/home/home_bg_image.jpg";
import visualization_bg_image from "./images/visualization/visualization.jpg";
import contact_bg_image from "./images/contact/contact.jpg";

import { home_html, home_img_html } from "./home.js";
import { photography_html, photography_img_html } from "./photography.js";
import { visualization_html, visualization_img_html } from "./visualization.js";
import { contact_html, contact_img_html } from "./contact.js";

document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const fullscreenMenu = document.getElementById("fullscreen-menu");
  const closeMenuBtn = document.getElementById("close-menu");

  hamburgerBtn.addEventListener("click", function () {
    fullscreenMenu.classList.add("open");
  });

  closeMenuBtn.addEventListener("click", function () {
    fullscreenMenu.classList.remove("open");
  });

  document.addEventListener("click", function (event) {
    if (
      !fullscreenMenu.contains(event.target) &&
      !hamburgerBtn.contains(event.target)
    ) {
      fullscreenMenu.classList.remove("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const app = document.querySelector(".main"); // Main content area
  const bgPhoto = document.querySelector(".top-img");

  // Navigation buttons
  const navButtons = {
    home: document.querySelector(".nav-home-btn"),
    photography: document.querySelector(".nav-photo-btn"),
    visualization: document.querySelector(".nav-visual-btn"),
    contact: document.querySelector(".nav-contact-btn"),
  };

  // Page data (Background images & content)
  const pages = {
    home: { bg: home_bg_image, img: home_img_html, content: home_html },
    photography: {
      bg: photography_bg_image,
      img: photography_img_html,
      content: photography_html,
    },
    visualization: {
      bg: visualization_bg_image,
      img: visualization_img_html,
      content: visualization_html,
    },
    contact: {
      bg: contact_bg_image,
      img: contact_img_html,
      content: contact_html,
    },
  };

  // Function to load a page dynamically
  function loadPage(page) {
    if (!pages[page]) return;

    const { bg, img, content } = pages[page];

    window.scrollTo(0, 0);

    // Update background and content
    bgPhoto.style.backgroundImage = `url(${bg})`;
    bgPhoto.innerHTML = img;
    app.innerHTML = content;

    // Update active tab
    Object.values(navButtons).forEach((btn) =>
      btn.classList.remove("current-tab")
    );
    navButtons[page].classList.add("current-tab");

    // Reattach event listeners
    setLinks();
  }

  // Attach event listeners dynamically
  function setLinks() {
    ["home", "photography", "visualization", "contact"].forEach((page) => {
      document.querySelectorAll(`#${page}-link`).forEach((element) => {
        element.addEventListener("click", () => loadPage(page));
      });
    });
  }

  // Assign click events to navigation buttons
  Object.entries(navButtons).forEach(([page, button]) => {
    button.addEventListener("click", () => loadPage(page));
  });

  // Load default page
  loadPage("home");
});
