import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';

const Cars = lazy(() => import('./Cars'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
