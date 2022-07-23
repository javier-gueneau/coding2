import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  
  return (
    <div className="App">
AAaa
        <PersonCard nombre={"Doe,Jane"} age={35} hairColor={"hair Color: " +"black"}
        />


        <PersonCard nombre={"Smith,John"} age={88} hairColor={"hair Color: " +"brown "}/>
        <PersonCard nombre={"Muñoz,Monica"} age={25} hairColor={"hair Color: " +"blonde"}/>


    </div>
  );
}
  
export default App;
