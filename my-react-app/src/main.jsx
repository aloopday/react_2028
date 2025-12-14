import {createRoot} from 'react-dom/client';
function Car(props){
    return(
        <>
        <h2>My {props.carinfo.name} {props.carinfo.model} !</h2>
        <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
        
        </>
    );
}

const carInfo={
    name:"Tesla",
    model:"model y",
    color:"black",
    year:2025
};

createRoot(document.getElementById('root')).render(
    <Car carinfo={carInfo} />
);