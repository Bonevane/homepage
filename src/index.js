import "./styles.css";

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
