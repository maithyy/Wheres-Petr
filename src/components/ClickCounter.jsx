import React, { useState } from 'react';
import { useEffect } from 'react';
import petr from '../images/petr.png'

const ClickCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // in here we'll change the location
      console.log('my count is');
    }, [count]);

    const handleClick = () => {
      setCount(count + 1)
    }
    
    // change image styling left and top randomly every time useeffect is called

    let topPosition = Math.random() * 500;
    let leftPosition = Math.random() * 1800;
    
    return (
      <div>
        <h1> Times you've clicked Petr: {count}</h1>
        <img style={{ height: 100, position: 'absolute', left: {leftPosition}, top: {topPosition} }} src={petr} alt= "Petr" onClick={handleClick}/>
      </div>
    );
}

export default ClickCounter