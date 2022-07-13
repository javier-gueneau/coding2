window.onload = function(){
    const pokemonList = document.getElementById('pokemon-list')
    const activePokemonCard = document.getElementById('active-pokemon')
    let allPokemon = []

    const getAllPokemon = async () => {
        for(let i = 1; i < 152; i++){
           const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
           const data = await request.json(); 
        //    console.log(data)
           allPokemon.push(data)
        }
        // console.log(allPokemon)
        displayAllPokemon()
    }
    getAllPokemon()
    
    const displayAllPokemon = () => {
        allPokemon.forEach((pokemon) => {
            // console.log(pokemon)
            pokemonList.innerHTML += `<li class="pokemon" data-pokemon-id="${pokemon.id}"><img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"></li>`
        })
        const pokemons = document.getElementsByClassName('pokemon')
        // console.log(pokemons)
        Array.from(pokemons).forEach(function(element) {
            //console.log(element.dataset.pokemonId)
            element.addEventListener('click', () => handlePokemonClick(element.dataset.pokemonId));
        });
    }
    // ARROW FUNCTION
    const handlePokemonClick = (index) => {
        // console.log(allPokemon[index - 1])
        const pokemon = allPokemon[index - 1]
        const {name, height, weight} = pokemon;
        const url = pokemon.sprites.front_default
        const types = pokemon.types
        let typesList = '<ul>'
        for(let i = 0; i < types.length; i++){
            typesList += `<li>${types[i].type.name}</li>`
        }
        typesList += '</ul>'
        activePokemonCard.innerHTML = `<h2>${name}</h2><img src="${url}" alt="${name}"><p>Types</p>${typesList}<p>Height: ${height}</p><p>Weight: ${weight}</p>`
    }
}