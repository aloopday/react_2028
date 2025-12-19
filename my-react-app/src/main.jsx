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

createRoot(document.getElementById('root')).render(<App/>);