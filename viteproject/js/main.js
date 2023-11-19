import "../css/style.css";
import { pokemons } from "./pokemon";
import { DOMSselectors } from "./doms";

function cardCreator(name, type, img) {
  document.querySelector(".box").insertAdjacentHTML(
    //make this a DOMSselector object later.
    "beforeend",
    `<div class="item">
      <h2 class = "text">${name}</h2>
      <img src=${img} alt="${name}">
      <h2 class = "text">Type: ${type
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(", ")}</h2>
    </div>`
  );
}

function callCard() {
  pokemons.forEach((take) => cardCreator(take.name, take.type, take.imgURL));
}

function typeFilter(filtering) {
  const filteringType = pokemons.filter((pokemonType) =>
    pokemonType.type.includes(filtering)
  );
  filteringType.forEach((take) =>
    cardCreator(take.name, take.type, take.imgURL)
  );
}

DOMSselectors.button.forEach((button) => {
  console.log(button, button.id);
  button.addEventListener("click", function () {
    document.querySelector(".box").replaceChildren(); // Used to different remove methods so I remember the two methods later.
    typeFilter(button.id);
  });
});

DOMSselectors.button2.addEventListener("click", function () {
  document.querySelector(".box").removeChild(document.querySelector(".item"));
  callCard();
});

// Make cards that look like this: https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_15.png
