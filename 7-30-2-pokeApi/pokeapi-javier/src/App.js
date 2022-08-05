import './App.css';
import React, {useState,useEffect} from 'react';
import FetchPokemon from './components/FetchPokemon'

const App =()=>  {
  const [state , setState]= useState();

/* useEffect(()=>{
  
  console.log('hh')
  console.log(state)

  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response=>{
      return response.json()
    })
    .then(response=>{
      setState({
        people:response.results
      })
    })
},[]); */

  return(
    <div>

      {/* <button onClick={(state={state})=>FetchPokemon(state={state})} >aa</button> */}
      
      {/* <button onClick={FetchPokemon} > btn </button> */}

      <FetchPokemon inputs={state} setInputs={setState} />

      {/* <p>{state}</p> */}

      {state  ? state.map((item,index)=>{
          return(<div key={index} >{item.name}</div> )
        }):null} 

    </div>
  );
}

export default App;
