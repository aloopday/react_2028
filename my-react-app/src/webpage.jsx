import {createRoot} from 'react-dom/client';
import {Suspense,lazy} from 'react';
import Bottom from './Bottom.jsx';
import Top from './Top.jsx';

const Header =lazy(()=>import('./header'));
const Content=lazy(()=>import('./Content'));
const Sidebar=lazy(()=>import('./sidebar'));

function App(){
  return(
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
      <h1 style={{color:"red"}}>This is a dog finding website</h1>
      <div style={{display:'flex'}}>
      <Sidebar />
      <Content />
      <Bottom />
      <Top />
      </div>
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
)
