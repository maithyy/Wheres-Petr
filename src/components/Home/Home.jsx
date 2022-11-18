import IntroCards from "../IntroCards/IntroCards";
import webjampetr from "../../images/webjampetr.png";

import "./Home.css";

const React = require("react");

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="IntroTitle">
          <h1>Welcome to Where is Petr?</h1>
        </div>
        <div className="IntroCards">
          <IntroCards
            text="EXPLORE UCI WITH PETR"
            chosenImage={webjampetr}
            caption="The goal of this game is to find the hidden Petr on different spots across camps!"
          />
          <IntroCards
            text="FIND PETR IN YOUR PICTURE"
            chosenImage={webjampetr}
            caption="Upload an image and find where Petr hid in that image. Watchout! There is a timer!"
          />
        </div>
      </div>
    );
  }
}

// class HomePage extends React.Component {
//   render() {
//     return <h1>hi</h1>;
//   }
// }

export default HomePage;
