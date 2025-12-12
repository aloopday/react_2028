import {createRoot} from 'react-dom/client'
function Car(){
    return(
        <h2>I am a Car!</h2>
    );
}
function Owner(){
    return(
        <h1>I am the owner</h1>
    );
}
function Garage(){
    return(
        <>
        <Owner />
        <h1>Who lives in my Garage?</h1>
        <Car />
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Garage />
);