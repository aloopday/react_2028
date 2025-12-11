import {createRoot } from 'react-dom/client'
const myElement =(

    <ul>
        <li>Alex</li>
        <li>Olivia</li>
        <li>Isabella</li>
    </ul>
);

createRoot(document.getElementById('root')).render(
    myElement
);