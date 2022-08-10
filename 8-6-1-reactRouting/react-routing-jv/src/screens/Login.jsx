import { Link } from "react-router-dom";
import React,{useState} from "react";

const Login=({inputs,setInputs})=>{
    
    const handleSelect=e=>{
        console.log('e.target.value is')
        console.log(e.target.value)
        setInputs({...inputs,type:e.target.value})
    }
    
    const onchange=e=>{
        setInputs({...inputs,id:e.target.value})
    }
    
    const onclick=e=>{
        e.preventDefault();
        console.log('inputs after set')
        console.log(inputs)
    }

    const printState=()=>{
        console.log(inputs)
    }

    return(
        <div>This is LOGIN.
            <form>
                <label>Search for:</label>
                <select name="type" label={"typeItem"} onChange={(e)=>handleSelect(e)} >
                    <option  >Select...</option>
                    <option value="people" >People</option>
                    <option value="planets">Planets</option>
                    <option value="films" >Films</option>
                    <option value="species" >Species</option>
                    <option value="vehicles" >Vehicles</option>
                    <option value="starships" >Starships</option>
                </select>

                <label>ID:</label>
                <input type="text" name="id" onChange={onchange} ></input>
            </form>
                
            <Link to={`/${inputs.type}${inputs.id}`}>Search... </Link>

            <br/>
            <button onClick={printState} >Print State: Inputs. </button>

        </div>
    )
}

export default Login;