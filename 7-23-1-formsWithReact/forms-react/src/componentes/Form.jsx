import React from 'react';


const Form =props=>{
    const{inputs,setInputs}=props;
    
    const onChange=e=>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value 
        })
    }
    
        return(
            <div>
                <form>
                    <div className='card'>
                        <label className='label'>First Name</label>
                        <input onChange={onChange} type="text" name="firstName" placeholder='...'></input>
                    </div>
                    <div className='card'>
                        <label>Last name</label>
                        <input onChange={onChange} type="text" name="lastName" placeholder='...'></input>
                    </div>
                    <div className='card'>
                        <label>Email</label>
                        <input onChange={onChange} type="Email" name="email" placeholder='...'></input>
                    </div>
                    <div className='card'>
                        <label>Password</label>
                        <input onChange={onChange} type="password" name="password" placeholder='...'></input>
                    </div>
                    <div className='card'>
                        <label>Confirm Password</label>
                        <input onChange={onChange} type="password" name="password" placeholder='...'></input>
                    </div>
                </form>

            </div>
        )
}




export default Form;