import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello Dojo!</h2>
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
          hellooooo
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>

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
