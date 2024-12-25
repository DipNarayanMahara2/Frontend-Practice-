const card = document.querySelectorAll(".card-inner");

card.forEach((card) => {
  card.addEventListener("click", function (e) {
    card.classList.toggle("is-flipped");
  });
});
