import "./styles.css";
import photography_bg_image from "./images/photography/leaves.jpg";
import home_bg_image from "./images/home/home_bg_image.jpg";
import visualization_bg_image from "./images/visualization/visualization.jpg";
import contact_bg_image from "./images/contact/contact.jpg";
import landscape_bg_image from "./images/misc/landscape.jpg";
import architecture_bg_image from "./images/misc/architecture.jpg";
import coverage_bg_image from "./images/misc/coverage.jpg";
import macro_bg_image from "./images/misc/macro.jpg";
import personal_bg_image from "./images/architecture/personal/personal-front.jpg";
import em_en_bg_image from "./images/architecture/em-en/em-en-front.jpg";
import at_cafe_bg_image from "./images/architecture/at-cafe/at-cafe-front.jpg";
import kickstart_bg_image from "./images/architecture/kickstart/kickstart-front.jpg";

import { home_html, home_img_html } from "./home.js";
import { photography_html, photography_img_html } from "./photography.js";
import { visualization_html, visualization_img_html } from "./visualization.js";
import { contact_html, contact_img_html } from "./contact.js";
import { landscape_html, landscape_img_html } from "./pages/landscape.js";
import {
  architecture_html,
  architecture_img_html,
} from "./pages/architecture.js";
import { coverage_html, coverage_img_html } from "./pages/coverage.js";
import { macro_html, macro_img_html } from "./pages/macro.js";
import {
  at_cafe_html,
  at_cafe_img_html,
} from "./pages/architecture/at-cafe.js";
import {
  em_en_cafe_html,
  em_en_cafe_img_html,
} from "./pages/architecture/em-en-cafe.js";
import {
  kickstart_html,
  kickstart_img_html,
} from "./pages/architecture/kickstart.js";
import {
  personal_html,
  personal_img_html,
} from "./pages/architecture/personal.js";

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
    landscape: {
      bg: landscape_bg_image,
      img: landscape_img_html,
      content: landscape_html,
    },
    architecture: {
      bg: architecture_bg_image,
      img: architecture_img_html,
      content: architecture_html,
    },
    coverage: {
      bg: coverage_bg_image,
      img: coverage_img_html,
      content: coverage_html,
    },
    macro: {
      bg: macro_bg_image,
      img: macro_img_html,
      content: macro_html,
    },
    at: {
      bg: at_cafe_bg_image,
      img: at_cafe_img_html,
      content: at_cafe_html,
    },
    em: {
      bg: em_en_bg_image,
      img: em_en_cafe_img_html,
      content: em_en_cafe_html,
    },
    kickstart: {
      bg: kickstart_bg_image,
      img: kickstart_img_html,
      content: kickstart_html,
    },
    personal: {
      bg: personal_bg_image,
      img: personal_img_html,
      content: personal_html,
    },
  };

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

    if (navButtons[page]) navButtons[page].classList.add("current-tab");

    // Reattach event listeners
    setLinks();
  }

  function setLinks() {
    [
      "home",
      "photography",
      "visualization",
      "contact",
      "landscape",
      "coverage",
      "macro",
      "architecture",
      "em",
      "at",
      "personal",
      "kickstart",
    ].forEach((page) => {
      document.querySelectorAll(`#${page}-link`).forEach((element) => {
        element.addEventListener("click", () => loadPage(page));
      });
    });
  }

  // Navigation buttons
  Object.entries(navButtons).forEach(([page, button]) => {
    button.addEventListener("click", () => loadPage(page));
  });

  loadPage("home");
});

window.openLightbox = function openLightbox(imageSrc) {
  document.getElementById("lightbox-img").src = imageSrc;
  document.getElementById("lightbox").style.display = "block";
};

window.closeLightbox = function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
};
