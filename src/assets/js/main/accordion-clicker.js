const accordion = document.querySelector("#accordion");
const accordionItems = accordion.querySelectorAll(".accordionItem");

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener("click", function () {
    accordionItems[i].classList.toggle("active");
    hideAll(i);
  });
}

function hideAll(currentIndex) {
  for (let j = 0; j < accordionItems.length; j++) {
    if (accordionItems[j].classList.contains("active") && currentIndex != j) {
      accordionItems[j].classList.toggle("active");
    }
  }
}
