import {createRoot} from 'react-dom/client'
//Check out the index.html file, were we have added 

function Car(){
    const x ="myclass";
    return(
        <>
        <h1 className={x}>Hello Charles!</h1>
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <Car />
);