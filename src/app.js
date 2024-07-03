/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

let palos = ["♠", "♥", "♣", "♦"];

const randomIndex = Math.floor(Math.random() * cards.length);
const randomCard = cards[randomIndex];
const randomPalos = Math.floor(Math.random() * palos.length);
const body = document.querySelector(".card-body");
const h1 = document.querySelectorAll("h1");

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  body.textContent = cards[randomIndex];
  h1.forEach(element => {
    let palo = palos[randomPalos];
    if (palo === "♥" || palo === "♦") {
      element.style.color = "red";
    }
    element.textContent = palo;
  });
};
