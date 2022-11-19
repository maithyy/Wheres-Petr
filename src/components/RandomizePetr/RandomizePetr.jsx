import React, { Component } from "react";
import webjampetr from "../../images/webjampetr.png";
import dbh from "../../images/dbh.png";
import ics1 from "../../images/ics1.jpg";
import pslh from "../../images/pslh.png";
import hib from "../../images/hib.jpg";
import sciencelibrary from "../../images/sciencelibrary.png";
import langson from "../../images/langson.jpg";
import mesacourt from "../../images/mesacourt.jpg";
import brandywine from "../../images/brandywine.jpg";

import "./RandomizePetr.css";

const locations = [
  [dbh, "Donald Bren Hall", "https://map.uci.edu/?id=463#!ct/61979?m/454487"],
  [
    ics1,
    "Information & Computer Sciences Building",
    "https://map.uci.edu/?id=463#!ct/61979?m/83096",
  ],
  [
    pslh,
    "Physical Sciences Lecture Hall",
    "https://map.uci.edu/?id=463#!ct/61979?m/577692",
  ],
  [
    hib,
    "Humanities Instructional Building",
    "https://map.uci.edu/?id=463#!ct/61979?m/83162",
  ],
  [
    sciencelibrary,
    "Science Library",
    "https://map.uci.edu/?id=463#!ct/61979?m/83168",
  ],
  [langson, "Langson Library", "https://map.uci.edu/?id=463#!ct/61979?m/83170"],
  [mesacourt, "Mesa Court", "https://map.uci.edu/?id=463#!ct/61979?m/83072"],
  [brandywine, "Brandywine", "https://map.uci.edu/?id=463#!ct/61979?m/446803"],
];

class RandomizePetr extends Component {
  // Create state
  state = {
    topPos: Math.random() * 90,
    leftPos: Math.random() * 90,
    count: 0,
    location: locations[Math.floor(Math.random() * locations.length)],
  };

  movePetr = () => {
    //let container = document.getElementsByClassName("picture-container");

    this.setState({
      topPos: Math.random() * 90,
      leftPos: Math.random() * 90,
      count: this.state.count + 1,
      location: locations[Math.floor(Math.random() * locations.length)],
    });
  };

  render() {
    return (
      <div className="game-container">
        <div className="desc-container">
          <h1 className="point-counter">
            {" "}
            Times you've clicked Petr: {this.state.count}
          </h1>
          <h1 className="game-desc">
            Welcome to Where’s Petr! The goal of this game is to find the hidden
            Petr on different spots across camps! You’ll get to know UCI as well
            as play a version of hide and seek with our school mascot! Happy
            searching!
          </h1>
        </div>
        <div className="picture-container">
          {/* Element to Move Dynamically */}
          <img
            style={{
              height: 100,
              position: "absolute",
              left: `${this.state.leftPos}%`,
              top: `${this.state.topPos}%`,
            }}
            src={webjampetr}
            alt="Petr"
            onClick={this.movePetr}
          />
          <img
            className="locations"
            src={this.state.location[0]}
            alt="UCI location"
          />
          <h1>{this.state.location[1]}</h1>
        </div>
      </div>
    );
  }
}

export default RandomizePetr;
