import {useState} from 'react';
import {createRoot} from 'react-dom/client';

function Mycar(){
  const [car,setCar] =useState(
    {
      brand:"tesla",
      model:"model y",
      year:"1964",
      color:"red"
    });

    const updateColor= ()=>{
      setCar(perviousState =>{
        return { ...perviousState,color:"blue"}
      });
    }
  return(
    <>
  <h1>This is my {car.brand}</h1>
  <p>
    It is a {car.color} {car.model} from {car.year}.
  </p>
  <button 
  type="button"
  onClick={updateColor}
  >
    Blue
  </button>
    </>
  )
}

