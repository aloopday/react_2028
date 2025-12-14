import {createRoot } from 'react-dom/client';
import React from 'react';

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"tesla",
            model:"model 2",
            color:"red",
            year:2025
        };
    }

    changeColor = () =>{
        this.setState({color:"black"});
    }
    render(){

        return(
            <div>
            <h1>My {this.state.brand}</h1>
            <p>
                This is a {this.state.color}
                {this.state.model}
                from {this.state.year} .
            </p>
            <button
            type="button"
            onClick={this.changeColor}>

                Change color

            </button>
        </div>

        );
        
    }
}


createRoot(document.getElementById('root')).render(
    <Car />
)