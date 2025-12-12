import {createRoot} from 'react-dom/client'

function Car(){
    const mystyles ={
        color:"blue",
        fontSize:"20px",
        backgroundColor:"lightyellow",
    };

    return(
        <>

        <h1 style={mystyles}>My car</h1>
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Car />
);