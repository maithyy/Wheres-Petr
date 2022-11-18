import IntroCards from "../IntroCards/IntroCards";
import card from "../../images/card.png";

import "./Home.css";

const React = require("react");

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="IntroCards">
          <IntroCards
            text="EXPLORE UCI WITH PETR"
            mypath="/game"
            chosenImage={card}
            caption="The goal of this game is to find the hidden Petr on different spots across campus!"
          />
          <IntroCards
            text="FIND PETR IN YOUR PICTURE"
            mypath="/picture"
            chosenImage={card}
            caption="Upload an image and find where Petr's hiding in that image. Watchout! There is a timer!"
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
