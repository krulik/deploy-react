import logo from './logo.svg';
import './App.css';

const config = {
  apiUrl: process.env.REACT_APP_API_URL
};

console.log(config);

// This is the best comment

function App() {
  return null;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Serge was here.
        </p>
        <div>
          Some env vars:
          <dl>
            <div>
              <dd>NODE_ENV</dd>
              <dt>{process.env.NODE_ENV}</dt>
            </div>
            <div>
              <dt>REACT_APP_API_URL</dt>
              <dt>{process.env.REACT_APP_API_URL}</dt>
            </div>
          </dl>
        </div>
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
