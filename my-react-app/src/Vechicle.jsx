import React from "react";

function Car(){
    return(
        <h2>Hi, This is a Tesla Car!</h2>
    );
}


export default Car;
export class Car extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }
    render() {
        return <h2> I am a {this.state.color} Car!</h2>;
    }
}
