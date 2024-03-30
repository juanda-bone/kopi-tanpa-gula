// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const humberger = document.querySelector("#humberger");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");
const cartButton = document.querySelector("#cart-button");
const shoppingCart = document.querySelector(".shopping-cart");
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const closeIcon = document.querySelector(".close-icon");

// ketika humberger di klik
humberger.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// shopping cart button
cartButton.addEventListener("click", (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
});

// toggle class active untuk search form
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchBox.focus();
  searchBox.value = "";
});

// modal box
itemDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  });
});

closeIcon.addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});

// click diluar elemen
document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !humberger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!shoppingCart.contains(e.target) && !cartButton.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

window.onclick = (e) => {
  if (e.target == itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
