
import React, { Component } from "react";
import petr from '../images/petr-removebg.png'
  
class RandomizePetr extends Component {
  
  // Create state
  state = {
    topPos: Math.random() * 90,
    leftPos: Math.random() * 90,
    count: 0
  };
   
  movePetr = () => {
    this.setState(
      { topPos: Math.random() * 90,
        leftPos: Math.random() * 90,
        count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1> Times you've clicked Petr: {this.state.count}</h1>
        {/* Element to Move Dynamically */}
        <img
            style={{
            height: 100,
            position: 'absolute',
            left: `${this.state.leftPos}%`,
            top: `${this.state.topPos}%` }}
            
            src={petr}
            
            alt= "Petr"
            
            onClick={this.movePetr}/>
   
      </div>
    );
  }
}
   
export default RandomizePetr;