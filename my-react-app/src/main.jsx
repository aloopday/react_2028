
import{useState} from 'react';
import { createRoot } from 'react-dom/client';
import{MyApp} from './Modal.jsx';
import{App} from './Button.jsx';

function MyForm(){
    const [selectedFruit, setSelectedFruit] =useState('banana');

    const handleChange=(event) =>{
        setSelectedFruit(event.target.value);
    };

    const handleSubmit=(event) =>{
        alert(`Your favorite fruit is :${selectedFruit}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Select your favorite fruit:</p>
            <label>
                <input 
                type="radio"
                name="fruit"
                value="orange"
                checked={selectedFruit ==='orange'}
                onChange={handleChange}
                
                /> Orange
            </label>
            <br />
            <label>
                <input 
                    type="radio"
                    name="fruit"
                    value="apple"
                    checked={selectedFruit ==='apple'}
                    onChange={handleChange}
                />Apple
            </label>
            <br />
            <label>
                <input 
                    type="radio"
                    name="fruit"
                    value="cherry"
                    checked ={selectedFruit ==='peach'}
                    onChange={handleChange}
                /> Cherry
                </label>
                 <br />
                <button type ="submit">Submit</button>
                <MyApp />
                <App />
        </form>
        
    );
}

createRoot(document.getElementById('root')).render(
    <MyForm/>
)