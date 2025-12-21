<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
import ExtendBtn from './ExtendBut.jsx';
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <p>hello Welcome to my React App</p>
      <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>
      <ExtendBtn />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
=======
>>>>>>> 9a24b91918f9bf89529c0630faf79850a203c6a2
