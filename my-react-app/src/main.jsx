
import React, { useState } from 'react';    
import {createRoot, } from 'react-dom/client'

function Counter(){
  //Destructuring the array returned by useState
  const [count,setCount] =useState(0);
  return(
    <button onClick={ () => setCount(count +1)}>
      Count:{count}
    </button>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);
export default Counter