import "../css/style.css";
import { pokemons } from "./pokemon";
import { DOMSselector } from "./doms";

function cardCreator(name, type, img, description) {
  document.querySelector(".box").insertAdjacentHTML(
    //make this a DOMSselector object later.
    "beforeend",
    `<div class="item">
      <h2 class = "text">${name}</h2>
      <img src=${img} alt="cat1">
      <p class = "text2">Type: ${type.map((upper) => upper.charAt(0).toUpperCase() + upper.slice(1)).join(" | ")}</p>
      <p class ="description">${description}</p>
    </div>`
  );
}

function callCard() {
  pokemons.forEach((take) =>
    cardCreator(
      take.name,
      take.type,
      take.imgURL,
      take.description
    )
  );
}

function filterType(power) {
  const typeFilter = pokemons.filter((pokemonTypes) =>
    pokemonTypes.type.includes(power)
  );
  typeFilter.forEach((call) => cardCreator(call.name, call.type, call.imgURL, call.description));
}

DOMSselector.button.forEach((press) =>
  press.addEventListener("click", function () {
    DOMSselector.box.replaceChildren()
    filterType(press.id);
  })
);

DOMSselector.allcards.addEventListener("click", function(){
  DOMSselector.box.replaceChildren()
  callCard()
})

// Make cards that look like this: https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_15.png
