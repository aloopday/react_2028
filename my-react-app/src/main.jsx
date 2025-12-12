import{createRoot} from 'react-dom/client'

function Car(){
    const hp=218 *1.36;
    return(
        <>
        <h1>My car</h1>
        <p>It has {hp} horsepower</p>
        </>
    );
}
createRoot(document.getElementById('root')).render(
    <Car />
)