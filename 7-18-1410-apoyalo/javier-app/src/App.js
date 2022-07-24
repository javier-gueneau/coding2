import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import PersonCard from './components/PersonCard'

function App() {
  const [count,setCount]=useState(4)

  function decrementCount() {
    setCount(count-1)
  }

  const incrementCount = ()=>{
    setCount(count+1)
  }

  
  return (
    <div className="App">
AAaa
        <PersonCard nombre={"Doe,Jane"} age={35} hairColor={"hair Color: " +"black"}
        />


        <PersonCard nombre={"Smith,John"} age={88} hairColor={"hair Color: " +"brown "}/>
        <PersonCard nombre={"Muñoz,Monica"} age={25} hairColor={"hair Color: " +"blonde"}/>


        <div className='divBtns'>
          <button className='countBtn' onClick={decrementCount}>-</button>
          <span>{count}</span>
          <button className='countBtn' onClick={incrementCount}>+</button>

        </div>

    </div>
  );
}
  
export default App;
