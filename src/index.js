import "./styles.css";

document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 10) {
    // Adjust this value as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
