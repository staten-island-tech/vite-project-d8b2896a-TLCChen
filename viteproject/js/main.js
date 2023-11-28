// import code from other files
import { pokemons } from "./pokemon.js";
import { DOMSselector } from "./doms.js";
import "../css/style.css";

// function that changes the color theme of the website when the event "click" is detected on the button "btn".
// The text on the button changes each time the button is pressed using innerHTML.
function change() {
  document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.remove("cool");
      document.body.classList.add("warm");
      document.querySelector(".btn").innerHTML = "Cool";
    } else {
      document.body.classList.remove("warm");
      document.body.classList.add("cool");
      document.querySelector(".btn").innerHTML = "Warm";
    }
  });
}
// This function takes in four arguements: name, type, img, and description, to create and add flex cards into the HTML.
function cardCreator(name, type, img, description) {
  DOMSselector.box.insertAdjacentHTML(
    //make this a DOMSselector object later.
    "beforeend",
    `<div class="item">
      <h2 class = "text">${name}</h2>
      <img src=${img} alt="This is ${name}">
      <p class = "text2">Type: ${type
        .map((upper) => upper.charAt(0).toUpperCase() + upper.slice(1))
        .join(" | ")}</p>
      <p class ="description">${description}</p>
    </div>
    `
  );
}
// This function uses the function cardCreator to create flex cards using the objects from the array pokemons.
// It does this by looping through each object in the array "pokemons" and taking the values in its variables to create flex cards using cardCreator function.
function callCard() {
  pokemons.forEach((take) =>
    cardCreator(take.name, take.type, take.imgURL, take.description)
  );
}
// This function filters the pokemons array by type by taking in an arguement called power to create a new filtered array
// called typeFilter. Then it creates flex cards using the function cardCreator using objects from the array typeFilter.
function filterType(power) {
  const typeFilter = pokemons.filter((pokemonTypes) =>
    pokemonTypes.type.includes(power)
  );
  typeFilter.forEach((call) =>
    cardCreator(call.name, call.type, call.imgURL, call.description)
  );
}
// Calls the functions listed below.
callCard();
change();
// takes the many variables named "button" from the object DOMSselector. It then listens for "clicks" that are directed the "button"s.
// Once the "click" is detected all cards on the screen are replaced with ""(an empty string).
// Then the function filterType is used to filter the cards based on the id of the button pressed. The id of the buttons correspond to the type being filtered.
DOMSselector.button.forEach((press) =>
  press.addEventListener("click", function () {
    DOMSselector.box.replaceChildren();
    filterType(press.id);
  })
);
// Takes the variable "allcards" which is a button from the object DOMSselector. Then it detects for "clicks" directed at the "allcards" button.
// After the "click" is detected all children of box is replaced with ""(all cards are deleted).
// The function allCard is then called.
DOMSselector.allcards.addEventListener("click", function () {
  DOMSselector.box.replaceChildren();
  callCard();
});

// Make cards that look like this: https://assets.pokemon.com/assets/cms2/img/cards/web/XY6/XY6_EN_15.png
