import { refs } from "./refs.js";
import { getPokemonInfo } from "./getPokemon.js";

export async function addToBest() {
  const data = await getPokemonInfo(refs.inputForSearchPokemons.value);
  refs.addBestBtn.addEventListener("click", () => {
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    p.innerHTML = data.name;
    localStorage.setItem("best", data.name);


    refs.bestPokemons.appendChild(p);
    refs.bestPokemons.appendChild(deleteBtn);

console.log(location);

    deleteBtn.addEventListener("click", () => {
      p.remove();
      deleteBtn.remove();
       location.reload()
      
    });
    refs.addBestBtn.remove()
  });
}
