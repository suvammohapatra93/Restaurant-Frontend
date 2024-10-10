const hamburgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const goToTopButton = document.querySelector(".go-to-top");
const darkThemeToggle = document.getElementById("dark-theme-toggle");
const orderButton = document.getElementById("order-button");

// Hamburger menu toggle
hamburgerIcon.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("menu-open");
  headerContent.classList.toggle("open");
});

closeIcon.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("menu-open");
  headerContent.classList.remove("open");
});

// Scroll to top functionality
goToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dark theme toggle
darkThemeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Order button functionality
orderButton.addEventListener("click", () => {
  alert("Your order has been placed!");
});
