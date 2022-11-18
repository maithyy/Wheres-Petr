import React, { Component } from 'react'

export default class FindBtn extends Component {
  render() {
    return (
        <button style={{
          width: 150,
          height: 50,
          borderRadius: 10,
          margin: 50,
          backgroundColor: "#EF9919",
          fontFamily: 'JetBrains Mono',
        }} className="HomebarBtn">
          Find Petr
        </button>
    )
  }
}