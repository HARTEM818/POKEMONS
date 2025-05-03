const getPokemonInfo = async (name) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
};



const inputForSearchPokemons = document.querySelector(".search");
const addBestBtn = document.querySelector(".add__best__btn")
const info = document.querySelector(".info-container");
const bestPokemons = document.querySelector(".best__pokemons");


inputForSearchPokemons.addEventListener("input", async () => {
  try{
    const data = await getPokemonInfo(inputForSearchPokemons.value)
    console.log(data);
    
    const name = document.createElement("p")
    name.innerText = data.name;
    

    const type = document.createElement("p");
    type.innerText = data.types[0].type.name;


    const mass = document.createElement("p");
    mass.innerText = data.weight;


    const ability = document.createElement("p");
    data.stats.forEach((elem) => {
        console.log(elem.stat.name);
        ability.innerHTML +=  ` ${elem.stat.name}`;
        
        
    })
    console.log(name, type, mass, ability);
    const arr = [name, type, mass, ability]
    console.log(arr);
    
    arr.forEach((elem) => {
        addBestBtn.insertAdjacentHTML("beforebegin",`<p>${ elem.innerText} </p>`)
    })
    info.style.display = "flex";
    info.style.flexDirection = "column"



    addBestBtn.addEventListener("click", () => {
        const p = document.createElement("p");
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "delete"
        p.innerHTML = data.name
        localStorage.setItem("best", data.name)
        bestPokemons.appendChild(p)
        bestPokemons.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", () => {
          p.remove()
          deleteBtn.remove()
        })
    })
  } catch(error){
    console.error("такого помемона нема!!!")
  }
   
})