import { useParams } from "react-router-dom";
import React,{useState,useEffect} from "react";

import { Link } from "react-router-dom";

const Word=(props)=>{
    const {word}=useParams();
    const {inputs,setInputs}=props;
    
    const[apiInfo,setApiInfo]=useState('');

    const[aviso,setAviso]=useState(null);
    
    const printState=()=>{
        /* console.log('word is. . ')
        console.log(word) */
        console.log('inputs is. . ')
        console.log(inputs)
        /* console.log('useParams is')
        console.log(useParams) */
        console.log('apiInfo is. . ')
        console.log(apiInfo.detail)
    }

    useEffect(()=>{
        console.log(inputs)

        fetch(`https://swapi.dev/api/${inputs.type}/${inputs.id}`)
        .then(response=>{
            return response.json()
        })
        .then(response=>{
            /* setApiInfo */
            console.log('UseEffect + Fetch')
            console.log(response)
            setApiInfo(response)
            /* console.log(JSON.stringify(response)) */
            if(response.detail=='Not found' ){
                /* alert('dd') */
                console.log(aviso)
                setAviso('Error: Éstos no son los droides que está buscando.')
                /* {mensaje} */
            }
        })
    },[])
    
    /* const mensaje=()=>{
        if(apiInfo.detail=='Not found' ){
        return('eeee')
    }} */


    return(
        <div>This is Item's Page.
            <br/>
            <Link to={'/'}>Go to Login.</Link>

            <br></br>
            You are in : {inputs.type} / {inputs.id}

            <br/>
            <button onClick={printState} >Print State: Inputs.</button>

            {/* {mensaje()} */}

            {aviso ? 
            <div><h2  >{aviso}</h2></div> 
                    : null }

            {Object.keys(apiInfo).map((key)=>{
                return(<p>{key}_:_{apiInfo[key]}</p>)
            })}


            {/* <div>
                <h2>Name:       {apiInfo.name}</h2>
                <p>Height:      {apiInfo.height}</p>
                <p>Hair color:         {apiInfo.hair_color}</p>

                <p>Birth year:         {apiInfo.birth_year}</p>
                <p>Homeworld:         {apiInfo.homeworld}</p>
                <p>URL:         {apiInfo.url}</p>
            
            </div> */}

        </div>
    )
}

export default Word;