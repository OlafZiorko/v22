const toggleMenu = document.querySelector(".toggleMenu");
const headerNavigation = document.querySelector(".navigation__list");
let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let cardBody = card.querySelector(".card__body");
    cardBody.classList.toggle(".active");
  });
});

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNavigation.classList.toggle("show");
});
