/* 
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

const form = document.querySelector('[data-js="form"]');
const yourQuestion = document.querySelector('[data-js="your-question"]');
const yourAnswer = document.querySelector('[data-js="your-answer"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);
const charactersLeftElement2 = document.querySelector(
  '[data-js="remaining-characters2"]'
);

console.log("form", form);

function handleCharacterCount(inputElement, characterCountElement, maxLength) {
  inputElement.addEventListener("input", (e) => {
    const remainingCharacters = maxLength - e.target.value.length;
    characterCountElement.textContent = remainingCharacters;
  });
}
handleCharacterCount(yourQuestion, charactersLeftElement, 150);
handleCharacterCount(yourAnswer, charactersLeftElement2, 150);
