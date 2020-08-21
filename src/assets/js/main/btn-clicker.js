const headerNav = document.querySelector(".headerNav");
const headerNavBtn = document.querySelector(".headerBtn-menu");

headerNavBtn.addEventListener("click", function () {
  headerNav.classList.toggle("hide");
});
