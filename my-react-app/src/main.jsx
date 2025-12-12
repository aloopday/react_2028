import {createRoot} from 'react-dom/client'
function Car(props){
    return(
        <h2>I am a {props.brand}!<br></br>
        My color is {props.color}.</h2>
    )
}

function Garage(){
    return (
        <>
        
        <h1>Who lives in my Garage?</h1>
        <Car brand="Ford" color="red"/>
        <Car brand="BMW" color="black"/>
        
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Garage />
);