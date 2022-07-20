import logo from './logo.svg';
import './App.css';
import PersonCard from './'

function App() {
  class person{
      constructor(nombre,age,hairColor){
        this.nombre=nombre;
        this.age=age;
        this.hairColor=hairColor;
      }
  }
  
  const person1=new person("Doe,Jane",45,"black");
  const person2=new person("Smith John",88,"brown");
  const person3=new person("Fillmore Millard",50,"brown");
  const person4=new person("Doe,Jane",45,"black");
  
  return (
    <div className="App">
      <div>
          <h1>{person1.nombre}</h1> 
          <h3>{person1.age}</h3>
          <h3>Hair Color:{person1.hairColor}</h3>
      </div>
      <div>
          <h1>{person2.nombre}</h1> 
          <h3>{person2.age}</h3>
          <h3>Hair Color:{person2.hairColor}</h3>
      </div>
      <div>
          <h1>{person1.nombre}</h1> 
          <h3>{person1.age}</h3>
          <h3>Hair Color:{person1.hairColor}</h3>
      </div>
    </div>
  );
}
  
export default App;
