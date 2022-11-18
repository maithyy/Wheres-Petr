import React, { Component } from 'react'

export default class ExploreBtn extends Component {
  render() {
    return (
        <button style={{
          width: 150,
          height: 50,
          borderRadius: 10,
          margin: 50,
          marginRight: 100,
          backgroundColor: "#EF9919",
          fontFamily: 'JetBrains Mono',
        }}>
          Explore With Petr
        </button>
    )
  }
}
