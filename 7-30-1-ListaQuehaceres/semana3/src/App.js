import logo from './logo.svg';
import './App.css';
import React, {useState, preventDefault} from 'react';

function App() {

  const [tasks,setTasks] = useState([]);

  const [currentTask,setCurrentTask]=useState("");

  /* const inputF = (e)=>{
    console.log(e,"this is input") //undefined
    console.log(e.target) //
    console.log(e.value) //
    console.log(e.nativeEvent.data) //
  } */

  const addTask =(e)=> {
    e.preventDefault()
    // console.log(e.target) //button aa button
    // console.log(e.target.value) //
    // console.log(e.target.name) //
    // console.log(e.value) //undefined
    // console.log(e.input) //undefined
    // console.log(e.name) //undefined
    // console.log(e) // syntheticBaseEvent ...... harta cosa.
    setTasks([...tasks, currentTask])
    console.log(tasks)
    console.log(currentTask)
  }

  const deleteTask=(e,i)=>{
    const arr=tasks.filter((v,index) =>index !=i);
    setTasks(arr);
  }

  return (
    <div className="App">
      
      <form>
        <input /* value={currentTask} */ onChange={(e)=>setCurrentTask(e.target.value)} name='newTask' placeholder='Add task...' ></input>
        <button onClick={addTask}> Add. </button>
      </form>
      
      <h2>To-Do List.</h2>
      <table>
        <thead>
          <tr>
          <th>Tasks</th>
          <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {tasks.map((task,index)=><tr>
            <td>{task}</td>
            {<td><input type="checkbox"/> </td>}
            <td><button onClick={e => deleteTask(e,index)} >Delete</button></td>

            </tr>  )}

        </tbody>
      </table>
    </div>
  );
}

export default App;
