import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/akhileshgoud2504"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="gitlink"
        >
          Goto Akhilesh GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
