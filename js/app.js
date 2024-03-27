// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const humberger = document.querySelector("#humberger");

// ketika humberger di klik
humberger.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !humberger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
