import { createGlobalStyle } from "styled-components";  

const GlobalStyle=createGlobalStyle`

h1{
    color:yellow;
    background-color:black;
    front-family:Arial, sans-serif;}
.myparagraph{
font-family:courier,monospace;

color:blue;
}

`;

function Globalstyle(){
    return(
        <>
        <GlobalStyle/>
        <h1>This is a dog finding website</h1>
        <p className="myparagraph">Find your perfect dog companion here.</p>
        </>
    )
}

export default Globalstyle;