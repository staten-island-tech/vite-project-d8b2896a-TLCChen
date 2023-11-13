import "../css/style.css";
import { opps, name } from "./pokemon";
console.log(opps[0] + " is cool.");

document.querySelector(".box").insertAdjacentHTML(
  "beforeend",
  `<div class="item">
    <h2 class = "text">Cat</h2>
    <img src="./cat1.jpg" alt="cat1">
  </div>
  <div class="item">
    <h2 class = "text">Cat1</h2>
    <img src="./cat1.jpg" alt="cat1">
  </div>`
);

// Make cards that look like this: https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_15.png
