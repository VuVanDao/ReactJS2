import logo from "./logo.svg";
import "./App.scss";
import Hello from "./ex/Hello";

//component dạng hàm
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello />
      </header>
    </div>
  );
}

export default App;
/**
 * 2 loại component chính:
 * class component và function component (function(),arrow function)
 */
