import "./App.css";
import RandomizePetr from "./components/RandomizePetr";
import DisplayImage from "./components/DisplayImage";
import IntroCards from "./components/IntroCards";
import petr from "./images/petr.png";


function App() {
  return (
    <div className="App">
      <div className="IntroTitle">
        <h1>Welcome to Where is Petr?</h1>
      </div>
      <div className="IntroCards">
        <IntroCards text="EXPLORE UCI WITH PETR" chosenImage={petr} caption="The goal of this game is to find the hidden Petr on different spots across camps!"/>
        <IntroCards text="FIND PETR IN YOUR PICTURE" chosenImage={petr} caption="Upload an image and find where Petr hid in that image. Watchout! There is a timer!"/>
      </div> 
      <RandomizePetr />
      <DisplayImage />
    </div>
  );
}

export default App;
