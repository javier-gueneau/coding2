import React from 'react';
import {useState} from 'react';

const Form =props=>{
    const{inputs,setInputs}=props;

    const[errors,setErrors]=useState({
        "firstName":'',
        "lastName":'',
        "email":'',
        "password":'',
        "confirmPassword":''
    })

    const onChange=e=>{

        console.log(props.inputs)
        console.log(inputs)

        if(e.target.name=="firstName"){
            if(e.target.value.length <3){
                setErrors({...errors,[e.target.name]:"name must be more than 3"})
            }
            else{
                setErrors({...errors,[e.target.name]:""})
                setInputs({...inputs,[e.target.name]:e.target.value})
            }
        }
        if(e.target.name=="lastName"){
            if(e.target.value.length <3){
                setErrors({...errors,[e.target.name]:"name must be more than 3"})
            }
            else{
                setErrors({...errors,[e.target.name]:""})
                setInputs({...inputs,[e.target.name]:e.target.value})
            }
        }
        if(e.target.name=="email"){
            if(e.target.value.length <5){
                setErrors({...errors,[e.target.name]:"email must be more than 5"})
            }
            else{
                setErrors({...errors,[e.target.name]:""})
                setInputs({...inputs,[e.target.name]:e.target.value})

            }
        }
        if(e.target.name=="password"){
            if(e.target.value.length <8){
                setErrors({...errors,[e.target.name]:"password must be more than 8 characters"})
            }
            else{
                setErrors({...errors,[e.target.name]:""})
                setInputs({...inputs,[e.target.name]:e.target.value})

            }
            /* console.log(password) */

        }
        
        if(e.target.name=="confirmPassword"){
            if(e.target.value!=inputs.password){
                setErrors({...errors,[e.target.name]:"must be same password"})
            }
            else{
                setErrors({...errors,[e.target.name]:""})
            }
        }
    }
        
        return(
            <div>
                <form>
                    <div className='card'>
                        <label className='label'>First Name</label>
                        <input onChange={onChange} type="text" name="firstName" placeholder='...'></input>
                        <p>{errors.firstName}</p>
                    </div>
                    <div className='card'>
                        <label>Last name</label>
                        <input onChange={onChange} type="text" name="lastName" placeholder='...'></input>
                        <p>{errors.lastName}</p>
                    </div>
                    <div className='card'>
                        <label>Email</label>
                        <input onChange={onChange} type="email" name="email" placeholder='...'></input>
                        <p>{errors.email}</p>
                    </div>
                    <div className='card'>
                        <label>Password</label>
                        <input onChange={onChange} type="password" name="password" placeholder='...'></input>
                        <p>{errors.password}</p>
                    </div>
                    <div className='card'>
                        <label>Confirm Password</label>
                        <input onChange={onChange} type="password" name="confirmPassword" placeholder='...'></input>
                        <p>{errors.confirmPassword}</p>
                    </div>
                </form>
                

            </div>
        )
}




export default Form;