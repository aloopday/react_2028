import {createRoot} from 'react-dom/client';
import './NewMystyle.scss';

function MyHeader(){
  return(
    <div>
      <h1>My Header 1</h1>
      <h1>My Header 2</h1>
      <h3>My Header 3</h3>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyHeader />
);
