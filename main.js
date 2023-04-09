"use strict";

const elWrapperBtns = document.querySelector(".hero-levels");
const elEngWordsWrapper = document.querySelector(".main-words");
const elUzWordsWrapper = document.querySelector(".uz-words");
const gameWrapper = document.querySelector(".game");
const elTimer = document.querySelector(".time");
const btnLogout = document.querySelector(".btn-logout");

let deadline,
  count = 0;


  btnLogout.addEventListener("click",(evt)=>{
    window.location.href = "./registr.hmtl";
  })


  let scoreArr = [];

let gameId1,score = 0;
let gameId2;

elWrapperBtns.addEventListener("click", (evt) => {
  gameWrapper.style.display = "flex";
  if (evt.target.classList.contains("hero-level__easy")) {
    renderWords(randomWords(wordsEasy, translateEasyWord));
  } else if (evt.target.matches(".hero-level__medium")) {
    renderWords(randomWords(wordsMedium, translateMediumWord));
  } else if (evt.target.matches(".hero-level__hard")) {
    renderWords(randomWords(wordsHard, translateHardWord));
  }

  // if(count >=2) clearInterval(timer)
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
  let array = [];

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
            <button class="btn game__btn" data-id=${arr[array[i]][1].id}>${
      arr[array[i]][1].word
    }</button>
        </li>`;
    elEngWordsWrapper.insertAdjacentHTML("afterbegin", html);
    elUzWordsWrapper.insertAdjacentHTML("afterbegin", html2);
  });

  deadline = 22;
  elTimer.textContent = `You have ${deadline} seconds to find words`;
  const timer = setInterval(() => {
    elTimer.textContent = `You have ${--deadline} seconds to find words`;
    if (deadline == 0) {
      gameWrapper.style.display = "none";
      scoreArr.push(score);
    }
  }, 1000);
}

let elGame = document.querySelector(".game__wrapper");

// let click1 = false, click2 = false;

elGame.addEventListener("click", (e) => {
  if (e.target.classList.contains("game__btn")) {
    e.target.classList.add("opacity-50");
    count++;
    if (count == 3) count = 1;
    const id = e.target.getAttribute("data-id");
    if (count == 1) gameId1 = id;
    else gameId2 = id;
  }
  if (count == 2) {
    let disabledBtns = document.querySelectorAll(".opacity-50");
    if (gameId1 == gameId2) {
      score++;
      disabledBtns.forEach((item) => {
        item.classList.add("d-none");
      });
    } else {
      disabledBtns.forEach((item) => {
        item.classList.remove("opacity-50");
      });
    }
  }
});
