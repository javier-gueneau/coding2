
/* import React, (component) from 'react'; */
import React , {useState} from "react";

function PersonCard(props) {
    const [age, setAge] = useState(props.age)

    const aumentarEdad =()=>{
    setAge(age+1);
    console.log(age+1);
}


return (
  <div>
    <h1>{props.nombre}</h1>
    <h3>Age:{age}</h3>
    <h3>{props.hairColor}</h3>

    <button onClick={aumentarEdad} >aumentar edad</button>
    
  </div>)

  }

export default PersonCard;