import React, { useState } from 'react';
import { useEffect } from 'react';
import petr from '../images/petr.png'

const ClickCounter = ({name}) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // in here we'll change the location
      console.log('useEffect was called');
    }, [count]);

    const handleClick = () => (
      setCount(count + 1)
    );
    
    // change image styling left and top randomly every time useeffect is called

    return (
      <div>
        <h1> Times {name} has clicked Petr: {count}</h1>
        
        <img style={{ height: 100, position: 'absolute', left: 30, top: 50 }} src={petr} alt= "Petr" onClick={handleClick}/>
      </div>
    );
}

export default ClickCounter