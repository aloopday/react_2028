
import { createRoot } from 'react-dom/client';

function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}  // ← This closing brace was missing!

createRoot(document.getElementById('root')).render(
  <Greeting name="Charles" age={39} />
); // ← Added missing semicolon
// Remove the lone "export" at the end
export default Greeting;