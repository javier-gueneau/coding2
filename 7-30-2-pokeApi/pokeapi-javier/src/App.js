import './App.css';
import React, {useState,useEffect} from 'react';
import FetchPokemon from './components/FetchPokemon'

const App =()=>  {
  const [state , setState]= useState();

  return(
    <div>

      <FetchPokemon inputs={state} setInputs={setState} />

      {state  ? state.map((item,index)=>{
          return(<div key={index} >{item.name}</div> )
        }):null} 

    </div>
  );
}

export default App;
