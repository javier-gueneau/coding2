import logo from './logo.svg';
import './App.css';
import AxiosComponent from './components/AxiosComponent';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

const App = props=> {
  
  const[responseData,setResponseData]=useState([]);

  console.log('en App');
  
  const Prueba =()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response=>{
        
      console.log(response.data.results);
      setResponseData(response.data.results)
      })
  }

  return (
    <div className="App">
      {<button onClick={Prueba} >Axios poke!</button>}
      
      {responseData.map((item)=>{
        return(
          <p key={item.name}>{item.name}</p>)}
        )
      }

      <p>..</p>
      
    </div>
  );
}

export default App;
