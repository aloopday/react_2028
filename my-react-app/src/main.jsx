import {createRoot} from 'react-dom/client';

import TestHeader from './TestHeader.jsx';

function App(){
  return(
    <>
    <h2>Welcome to Dog finding !</h2>
   
    <TestHeader />
    </>
  );
}

<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
    <Car />
)
=======
createRoot(document.getElementById('root')).render(<App/>);
>>>>>>> 2fa4ad3fb1d0d3726779a48a599a956589c2fd60
