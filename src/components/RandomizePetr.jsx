
import React, { Component } from "react";
import petr from '../images/petr.png'
  
class RandomizePetr extends Component {
  
  // Create state
  state = {
    topPos: Math.random() * 500,
    leftPos: Math.random() * 1800
  };
   
  movePetr = () => {
    this.setState(
      { topPos: Math.random() * 500,
        leftPos: Math.random() * 1800
    });
  };

  render() {
    return (
      <div>
        {/* Element to Move Dynamically */}
        <img
            style={{
            height: 100,
            position: 'absolute',
            left: `${this.state.leftPos}px`,
            top: `${this.state.topPos}px` }}
            
            src={petr}
            
            alt= "Petr"
            
            onClick={this.movePetr}/>
   
      </div>
    );
  }
}
   
export default RandomizePetr;