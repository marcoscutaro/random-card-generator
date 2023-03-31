/* eslint-disable */
import "bootstrap";
import "./style.css";

const newCard = document.getElementById("btnId");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const card = document.querySelector(".card");
const number = document.querySelector(".number");

let currentSuitClass = "diam";

window.onload = () => {
  updateCard();
  newCard.addEventListener("click", updateCard);
  const intervalID = setInterval(updateCard, 4000);
};

const generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const index = Math.floor(Math.random() * numbers.length);
  return numbers[index];
};

const generateRandomSuit = () => {
  const suits = ["diam", "spade", "heart", "club"];
  const index = Math.floor(Math.random() * suits.length);
  const suit = suits[index];
  console.log("generated suit:", suit);
  return suit;
};

const updateCard = () => {
  card.style.width = `${widthInput.value}px`;
  card.style.height = `${heightInput.value}px`;
  //card.className = "card " + generateRandomSuit();
  card.classList.remove(currentSuitClass);
  currentSuitClass = generateRandomSuit();
  card.classList.add(currentSuitClass);
  //card.classList.add(generateRandomSuit());
  number.innerHTML = generateRandomNumber();
};
