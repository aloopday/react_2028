import {useState} from 'react';
import {createRoot} from 'react-dom/client';

function MyCar(){
  const [brand,setBrand]=useState("Ford");
  const [model,setModel]=useState("Tesla");
  const [year,setYear]=useState("1987");
  const[color,setColor]=useState("red");

  return (
    <>
    <h1>My {brand}</h1>
    <p>It is a {color} {model} from {year}.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);