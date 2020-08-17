const headerNav = document.querySelector(".headerNav");
const headerInner = headerNav.querySelector(".headerNav__inner");
const button = headerNav.querySelector(".btn-headerMenu");

button.addEventListener("click", function () {
  headerInner.classList.toggle("active");
  button.classList.toggle("active");
});
