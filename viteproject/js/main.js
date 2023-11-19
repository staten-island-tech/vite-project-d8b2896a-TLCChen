import "../css/style.css";
import { pokemons } from "./pokemon";

function cardCreator(name, type, img) {
  document.querySelector(".box").insertAdjacentHTML(
    //make this a DOMSselector object later.
    "beforeend",
    `<div class="item">
      <h2 class = "text">${name}</h2>
      <img src=${img} alt="cat1">
      <p class = "text2">Type: ${type}</p>
      <p class ="description">Lorem ipsum dolor sit amet, in quidam blandit eos, iriure philosophia vituperatoribus eam ut, in facilisi cotidieque quo. Pro ea ornatus dolores. Dignissim prodesset omittantur no ius. Id vix fierent torquatos accommodare, nec elitr oporteat cu. Iusto congue omnium pro no, sea no case paulo. Ne vim dicit nullam deleniti.</p>

    </div>`
  );
}

pokemons.forEach((take) => cardCreator(take.name, take.type, take.imgURL));

// Make cards that look like this: https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_15.png
