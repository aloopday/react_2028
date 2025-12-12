import {createRoot} from 'react-dom/client'

function kwtohp(kw){
    return kw * 1.36;
}

function Car(){
    return(
        <>
        <h1>My car</h1>
        <p>It has {kwtohp(218)} horsepower</p>
        
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <Car />
);