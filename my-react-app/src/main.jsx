import {createRoot} from 'react-dom/client'

function Car({color}){
    return(
        <h2>My car is {color}!</h2>
    );
}

createRoot(document.getElementById('root')).render(
    <Car brand="Ford" model="Model 3" color="black" />
);