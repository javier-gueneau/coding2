import react,{useState} from 'react';

const UserForm=(props)=>{
    const[username,setUsername]=useState("");


return(
    <div>

        <h3>h3</h3>
        <form>
            <label>username:</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} />

        </form>
    </div>
)

}

export default userForm;