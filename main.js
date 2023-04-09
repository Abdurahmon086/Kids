"use strict";

const elWrapperBtns = document.querySelector(".hero-levels");
const elEngWordsWrapper = document.querySelector(".main-words");
const elUzWordsWrapper = document.querySelector(".uz-words");

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
  let array = []

  while (array.length < 10) {
    const idWord = Math.floor(Math.random() * 10);
    if (!array.includes(idWord)) array.push(idWord);
  }


  arr.forEach((item, i) => {
    const html = `
        <li class="game__item" >
        <button class="btn game__btn" data-id=${item[0].id}>${item[0].word}</button>
        </li>`;
    const html2 = `
        <li class="game__item">
            <button class="btn game__btn" data-id=${arr[array[i]][1].id}>${arr[array[i]][1].word}</button>
        </li>`;
    elEngWordsWrapper.insertAdjacentHTML("afterbegin", html);
    elUzWordsWrapper.insertAdjacentHTML("afterbegin", html2);;

  });
}

// let elGame = document.querySelector('.game__wrapper')

// let gameId1 = 0
// let gameId2 = 0
// let click1 = false, click2 = false;

// elGame.addEventListener('click', (e) => {
//   if (e.target.classList.contains('game__btn')) {
//     const id = e.target.getAttribute('data-id');
//     click1 = true
//     gameId1 = id;
//   }


//   if (e.target.classList.contains('game__btn')) {
//     const id = e.target.getAttribute('data-id');
//     click2 = true
//     gameId2 = id;
//   }

//   if (click1 === true && click2 === true) {
//     if (gameId1 == gameId2) {
//       console.log('sad');
//     }
//   }
// })




