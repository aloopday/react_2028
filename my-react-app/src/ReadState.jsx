import {useState} from 'react';
import {createRoot} from 'react-dom/client';

function FavoriteColor(){
  const [color, setColor] =useState("red");

  return <h1>This is my favorite {color} !</h1>

}
