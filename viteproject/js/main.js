import "../css/style.css";
import { opps, name } from "./menu";
console.log(opps[0] + " is cool.");

document.querySelector(".box").insertAdjacentHTML(
  "beforeend",
  `<div class="item">
    <h2>Cat</h2>
    <img src="./cat1.jpg" alt="cat1">
  </div>
  <div class="item">
    <h2>Cat1</h2>
    <img src="./cat1.jpg" alt="cat1">
  </div>`
);
