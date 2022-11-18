import "./App.css";
import RandomizePetr from "./components/RandomizePetr";
import DisplayImage from "./components/DisplayImage";
import ExploreBtn from "./components/ExploreBtn";
import FindBtn from "./components/FindBtn";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Wheres Petr?</h1>
        <div>
          <h1>Image Goes Here</h1>
        </div>
        <div>
          <FindBtn/>
          <ExploreBtn/>
        </div>
      </div>
      <RandomizePetr />
      <DisplayImage />
    </div>
  );
}

export default App;
