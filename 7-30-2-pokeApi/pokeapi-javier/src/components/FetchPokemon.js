import React, {useState,useEffect} from 'react';


const FetchPokemon=({inputs,setInputs})=>{

    /* const{inputs,setInputs}=props; */
    console.log('tt')

    const callPokemon =()=>{
      fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response=>{
          return response.json()
        })
        .then(response=>{
          /* setInputs({
            people:response.results
          }) */
          /* console.log(response.results) */
          setInputs(response.results)
        })
        
    }

  return(
    <div>
        {console.log('xx')}
        <button onClick={callPokemon} >useEffect</button>

        {/* <button onClick={probar} >probar</button> */}

    </div>
  );

}

export default FetchPokemon;
