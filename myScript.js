let player = {
  name: "Per",
  chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
function startGame() {
  isAlive = true;
  let first = getRandomCard();
  let second = getRandomCard();
  cards = [first, second];
  sum = first + second;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum:" + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let third = getRandomCard();
    cards.push(third);
    sum += third;
    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
