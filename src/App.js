import logo from './logo.svg';
import './App.css';
import '/Users/larryh1981/project05/src/index.css';
import Navbar from "/Users/larryh1981/project05/src/components/Navbar";

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
