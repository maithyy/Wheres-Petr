import logo from "./logo.svg";
import "./App.css";
import RandomizePetr from "./components/RandomizePetr";
import DisplayImage from "./components/DisplayImage";
import ChangeImage from "./components/ChangeImage";

function App() {
  return (
    <div className="App">
      <h1>Wheres Petr</h1>
      <RandomizePetr />
      <DisplayImage />
    </div>
  );
}

export default App;
