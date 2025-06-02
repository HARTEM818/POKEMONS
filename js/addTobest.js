import { refs } from "./refs.js";
import { getPokemonInfo } from "./getPokemon.js";


export async function addToBest() {
  const data = await getPokemonInfo(refs.inputForSearchPokemons.value);

  refs.addBestBtn.addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];

    favorites.push(data.name);
    localStorage.setItem("favoritePokemons", JSON.stringify(favorites));

    renderFavorite(data.name);
    refs.addBestBtn.style.display = "none";
  });
}


export function renderFavorite(name) {
  const p = document.createElement("p");
  p.innerText = name;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";

  refs.bestPokemons.appendChild(p);
  refs.bestPokemons.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    p.remove();
    deleteBtn.remove();

    const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
    const updated = favorites.filter((item) => item !== name);
    localStorage.setItem("favoritePokemons", JSON.stringify(updated));

    refs.addBestBtn.style.display = "block";
  });
}
