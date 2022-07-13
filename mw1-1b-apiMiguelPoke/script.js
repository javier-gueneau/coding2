window.onload = function(){
    // VARIABLES
    const pokemonList = document.getElementById('pokemon-list')
    const activePokemonCard = document.getElementById('active-pokemon')
    let allPokemon = []
    let promises = [];

    function loadAllPokemon(){
        for(let i = 1; i < 152; i++){
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }


        Promise.all(promises).then((values) => {
            console.log(values);
            return Promise.all(values.map(response => response.json()))
        })
        .then(values => {
            console.log(values)
            allPokemon = values;
            updatePokemonListArray(allPokemon)
        })
        .catch(error => {
            console.log('CAUGHT')
            console.log(error)
        });
        // for(let i = 1; i < 152; i ++){ 
        //     // GET
        //     // PROMISE
        //     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        //     .then(response => response.json())
        //     .then(function(pokemon){
        //         // console.log(pokemon)
        //         allPokemon.push(pokemon)
        //         const pokemondDisplay = {name: pokemon.name ,url: pokemon.sprites.front_default, id: pokemon.id}
        //         updatePokemonList(pokemondDisplay)
        //      })
        //     .then(() => {
        //         console.log(allPokemon)
        //         // addClickEventToPokemonElements()
        //     });
        // }
        
    }
    loadAllPokemon();

    function updatePokemonListArray(pokemon){
        pokemon.forEach((pokemon) => {
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
    function updatePokemonList({name, url, id}){
        pokemonList.innerHTML += `<li class="pokemon" data-pokemon-id="${id}"><img src="${url}" alt="${name}"></li>`
    }

    function handlePokemonClick(index){
        console.log(allPokemon[index - 1])
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
