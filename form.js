/* TEXT COUNTER (MANUALLY)

const yourQuestion = document.querySelector('[data-js="your-question"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);
yourQuestion.addEventListener("input", (e) => {
  charactersLeftElement.textContent = 150 - e.target.value.length;
});

const yourAnswer = document.querySelector('[data-js="your-answer"]');
const charactersLeftElement2 = document.querySelector(
  '[data-js="remaining-characters2"]'
);

yourAnswer.addEventListener("input", (e) => {
  charactersLeftElement2.textContent = 150 - e.target.value.length;
});
*/

// FORM FIELD TEXT COUNTER

// Access data from form
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="your-question"]');
const answerInput = document.querySelector('[data-js="your-answer"]');
const tagInput = document.querySelector('[data-js="tag"]');

const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);
const charactersLeftElement2 = document.querySelector(
  '[data-js="remaining-characters2"]'
);

console.log("form", form);

// Text-Counter function
function handleCharacterCount(inputElement, characterCountElement, maxLength) {
  inputElement.addEventListener("input", (e) => {
    const remainingCharacters = maxLength - e.target.value.length;
    characterCountElement.textContent = remainingCharacters;
  });
}
handleCharacterCount(questionInput, charactersLeftElement, 150);
handleCharacterCount(answerInput, charactersLeftElement2, 150);

// CREATE NEW CARDS

// Submit Event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submit behavior

  // access data value
  const question = questionInput.value;
  const answer = answerInput.value;
  const tags = tagInput.value.split(",").map((tag) => tag.trim()); // tags as array

  // create new card with createElement
  const card = document.createElement("section");
  card.classList.add("question-card");

  // createElements
  const icon = document.createElement("img");
  const title = document.createElement("h2");
  const button = document.createElement("button");
  const answerElement = document.createElement("p");
  const tagsContainer = document.createElement("div");

  // classList.add for CSS Styling
  icon.classList.add("question-card__icon");
  title.classList.add("question-card__title");
  button.classList.add("question-card__button");
  tagsContainer.classList.add("question-card__tags");

  // add data to elements
  icon.src = "./assets/bookmark.png";
  icon.alt = "bookmark";
  title.textContent = question;
  button.textContent = "show answer";
  answerElement.textContent = answer;

  // add tags
  tags.forEach((tag) => {
    const tagElement = document.createElement("div");
    tagElement.classList.add("question-card__tag");
    tagElement.textContent = `#${tag}`;
    tagsContainer.appendChild(tagElement);
  });

  // add elements to card
  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(button);
  card.appendChild(answerElement);
  card.appendChild(tagsContainer);

  // add card to the site
  form.insertAdjacentElement("beforeend", card);

  // reset form
  form.reset();
});
