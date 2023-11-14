import "../css/style.css";
import { pokemons } from "./pokemon";

function cardCreator(name, type, img) {
  document.querySelector(".box").insertAdjacentHTML(
    //make this a DOMSselector object later.
    "beforeend",
    `<div class="item">
      <h2 class = "text">${name}</h2>
      <img src=${img} alt="cat1">
      <h2 class = "text">Type: ${type}</h2>
    </div>`
  );
}

pokemons.forEach((take) => cardCreator(take.name, take.type, take.imgURL));

// Make cards that look like this: https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_15.png
