import {createRoot} from 'react-dom/client'
import {useState} from 'react'

function Myform(){
    const [name,setName]=useState("Charles");
    return (
        <form>
            <label>
                Enter your name:
                <input
                type="text"
                value={name}
                onChange={(e) =>setName(e.target.value)}
                />
             
            </label>
        
        <p>Current value: {name}</p>

        </form>
        
    )

}

createRoot(document.getElementById('root')).render(
    <MyForm />
)