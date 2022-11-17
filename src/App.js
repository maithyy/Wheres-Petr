import "./App.css";
import RandomizePetr from "./components/RandomizePetr";
import DisplayImage from "./components/DisplayImage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Wheres Petr</h1>
      </div>
      <RandomizePetr />
      <DisplayImage />
    </div>
  );
}

export default App;
