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
    
    return (
      <div>
        <h1> Times you've clicked Petr: {count}</h1>
      </div>
    );
}

export default ClickCounter