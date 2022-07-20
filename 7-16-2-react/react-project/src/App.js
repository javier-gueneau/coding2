import logo from './logo.svg';
import './App.css';

import MyNewComponent from './components/myNewComponent';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h2>Hello Dojo!</h2>
        
      </header>

      <MyNewComponent someText={"....hello people , this is App.js"}/>
  
      <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Do sports...</li>
          <li>Manage my finance</li>
          <li>Go lunch with Tere</li>
          <li>Order groceries </li>
        </ul>

    </div>
  );
}

export default App;
