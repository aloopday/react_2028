import {createRoot} from 'react-dom/client'
import {useState} from 'react'

function MyForm(){
    const [inputs, setInputs]=useState({
        firstname:"Charles",
        lastname:"Wang"
    });

    const handleChange =(e) =>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }

    return(
        <form>
            <label>
                First Name:
                <input 
                type="text"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
                />
            </label>
            <br />
            <br/>
            <label>
                Last Name:
                <input
                type="text"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                
                />


            </label>
            <p>Current values:{inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}

createRoot(document.getElementById('root')).render(
    <MyForm />
)