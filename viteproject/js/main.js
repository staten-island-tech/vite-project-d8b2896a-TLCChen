import "../css/style.css";
import { pokemons } from "./pokemon";
import { DOMSselector } from "./doms";

function change(){
  
  document.querySelector(".btn").addEventListener("click", function(){
    if(document.body.classList.contains("cool")){
      document.body.classList.remove("cool")
      document.body.classList.add("warm")
      document.querySelector(".btn").innerHTML = "Cool";
    
  }
  else{
    document.body.classList.remove("warm")
    document.body.classList.add("cool")
    document.querySelector(".btn").innerHTML = "Warm";

  }
  })
}

function cardCreator(name, type, img, description) {
  DOMSselector.box.insertAdjacentHTML(
    //make this a DOMSselector object later.
    "beforeend",
    `<div class="item">
      <h5 class = "text">${name}</h5>
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
callCard()
change()

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
