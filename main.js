"use strict";

const elWrapperBtns = document.querySelector(".hero-levels");
const elEngWordsWrapper = document.querySelector(".main-words");
const elUzWordsWrapper = document.querySelector(".uz-words");
console.log(elWrapperBtns);

elWrapperBtns.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("hero-level__easy")) {
    renderWords(randomWords(wordsEasy, translateEasyWord));
  } else if (evt.target.matches(".hero-level__medium")) {
    renderWords(randomWords(wordsMedium, translateMediumWord));
  } else if (evt.target.matches(".hero-level__hard")) {
    renderWords(randomWords(wordsHard, translateHardWord));
  }
});

function randomWords(engWords, uzWords) {
  const indexArr = [];
  const wordsArr = [];

  while (indexArr.length < 10) {
    const idWord = Math.floor(Math.random() * 20) + 1;
    if (!indexArr.includes(idWord)) indexArr.push(idWord);
  }

  indexArr.forEach((item) => {
    wordsArr.push([engWords[item - 1], uzWords[item - 1]]);
  });
  return wordsArr;
}

function renderWords(arr) {
  elEngWordsWrapper.innerHTML = "";
  elUzWordsWrapper.innerHTML = "";

  arr.forEach((item) => {
    const html = `
        <li class="game__item" >
            <button class="btn game__btn" dataset-id=${item[0].id}>${item[0].word}</button>
        </li>`;
    const html2 = `
        <li class="game__item"  >
            <button class="btn game__btn" dataset-id=${item[1].id}>${item[1].word}</button>
        </li>`;
    elEngWordsWrapper.insertAdjacentHTML("afterbegin", html);
    elUzWordsWrapper.insertAdjacentHTML("afterbegin", html2);
  });
}


