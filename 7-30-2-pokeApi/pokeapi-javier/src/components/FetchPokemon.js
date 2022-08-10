import React, {useState,useEffect} from 'react';

const FetchPokemon=({inputs,setInputs})=>{

    console.log('tt')

    const callPokemon =()=>{
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response=>{
          return response.json()
        })
        .then(response=>{
          /* console.log(response) */
          setInputs(response.results)
        })
    }

  return(
    <div>
        {console.log('xx')}
        <button onClick={callPokemon} >Fetch</button>
    </div>
  );
}

export default FetchPokemon;
