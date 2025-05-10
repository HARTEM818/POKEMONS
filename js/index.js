import { getPokemonInfo } from "./getPokemon.js";
import { refs } from "./refs.js";
import { preparationInfo } from "./preparationInfo.js";
import { addToBest } from "./addTobest.js";



refs.inputForSearchPokemons.addEventListener("input", async () => {
  const NoPokemon = document.querySelector(".search + p");
  NoPokemon.style.display = "none";

  const prepared = await preparationInfo();
  prepared.forEach((elem) => {
    refs.addBestBtn.insertAdjacentHTML(
      "beforebegin",
      `<p>${elem.innerText}</p>`
    );
  });
  refs.info.style.display = "flex";
  refs.info.style.flexDirection = "column";

  addToBest();
});
