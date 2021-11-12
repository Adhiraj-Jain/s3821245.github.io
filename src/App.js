import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import About from "./components/About/About";

// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <About />
    </div>
  );
}

export default App;
