import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Form from './componentes/Form';
import Results from './componentes/Results';

const App =()=> {

  const [state,setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  return(
    <div>
      <Form inputs={state} setInputs={setState}/>
      <Results data={state}/>
    </div>
  )
}

export default App;
