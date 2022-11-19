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
import arc from "../../images/archeader.jpg";
import alp from "../../images/ALP-1024x650.jpg";
import aldrich from "../../images/Aldrich-Park_1600.jpg"
import brencenter from "../../images/BrenEventCenter.jpg"


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
  [brandywine, "Brandywine Commons", "https://map.uci.edu/?id=463#!ct/61979?m/446803"],
  [arc, "Anteater Recreation Center", "https://map.uci.edu/?id=463#!ct/61979?m/114630?sbc/"],
  [alp, "Anteater Learning Pavillion", "https://map.uci.edu/?id=463#!ct/61979?m/255884?sbc/"],
  [aldrich, "Aldrich Park", "https://map.uci.edu/?id=463#!bm/?ct/61979?m/126146?sbc/"],
  [brencenter, "Bren Events Center", "https://map.uci.edu/?id=463#!ce/8309?ct/61979?m/83046?s/"],
];

class RandomizePetr extends Component {

  // Create state
  state = {
    topPos: Math.random() * 52,
    leftPos: Math.random() * 50,
    count: 0,
    location: locations[Math.floor(Math.random() * locations.length)],
  };

  movePetr = () => {

    this.setState({
      topPos: Math.random() * 52,
      leftPos: Math.random() * 50,
      count: this.state.count + 1,
      location: locations[Math.floor(Math.random() * locations.length)],
    });
  };

  render() {
    return (
      <div className="game-container">
        <div className="desc-container">
          <h1 className="game-desc">
            Welcome to Where’s Petr! The goal of this game is to find the hidden
            Petr on different spots across camps! You’ll get to know UCI as well
            as play a version of hide and seek with our school mascot! Happy
            searching!
          </h1>
          <h1 className="point-counter"> Petr Clicks: {this.state.count}</h1>
        </div>
        <div className="picture-container">
          {/* Element to Move Dynamically */}
          <img 
            src={webjampetr}
            style={{
              height: 100,
              position: "absolute",
              left: `${38 + this.state.leftPos}%`,
              top: `${14+ this.state.topPos}%`,
            }}
            alt="Petr"
            onClick={this.movePetr}
            />

          <img
            className="locations"
            src={this.state.location[0]}
            alt="UCI location"
          />
          <a href={this.state.location[2]} target="_blank">
          <h1>{this.state.location[1]}</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default RandomizePetr;
