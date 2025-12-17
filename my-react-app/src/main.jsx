import {createRoot} from 'react-dom/client'
function MyCars(){
    const cars=[
        {id:1001,brand:'Tesla'},
        {id:1002,brand:"BMW"},
        {id:1003,brand:"Audi"}
    ];
    return(
        <>
        <h1>My Cars:</h1>
        <ul>
            {cars.map((car)=><li key={car.id}>This is my {car.brand}</li>)}
        </ul>
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <MyCars />
)
