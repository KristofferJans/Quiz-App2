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
