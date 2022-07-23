import  React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      nombre:'bbb',
      apellido:'',
    }
  }

  render(){
    return(
      <div className='App'>
        <h1>aa</h1> nombre={this.state.nombre}
      </div>
    )
  }
}

export default App;
