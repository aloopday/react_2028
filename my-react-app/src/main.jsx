import {createRoot} from 'react-dom/client';
import Buttomtest from './Buttomtest';
function App(){
  return(
    <>
    <h2>Welcome to Dog finding !</h2>
    <Buttomtest />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App/>);