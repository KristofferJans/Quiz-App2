// Bookmark toggle
const bookmarkImg = document.querySelector(".question-card__icon");

bookmarkImg.addEventListener("click", (event) => {
  const imageElement = event.target;

  let imageSrc = imageElement.src;

  if (imageSrc.includes("bookmark.png")) {
    imageElement.src = imageSrc.replace("bookmark.png", "bookmark_filled.png");
  } else {
    imageElement.src = imageSrc.replace("bookmark_filled.png", "bookmark.png");
  }
});

// Show/Hide answer toggle

const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach((card) => {
  const button = card.querySelector(".question-card__button");
  const answer = card.querySelector(".question-card__answer");

  button.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    button.textContent = answer.classList.contains("hidden")
      ? "show answer"
      : "hide answer";
  });
});
