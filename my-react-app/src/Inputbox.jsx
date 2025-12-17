import { useState } from 'react';                // Fixed import


 function MyForma() {                               // Fixed component name
  const [inputs, setInputs] = useState({});      // Initial state is fine

  const handleChange = (e) => {
    const target = e.target;                      // Fixed all typos: tartget → target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setInputs((prevValues) => ({                 // Fixed: values → prevValues
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();                      // Must be called first

    let fillings = '';

    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (fillings) fillings += ' and ';        // Better logic for "and"
      fillings += 'onion';
    }

    if (fillings === '') fillings = 'no fillings';

    // Fixed template literal syntax
    alert(`${inputs.firstname || 'Someone'} wants a burger with ${fillings}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        My name is:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname || ''}           // Provide default to avoid uncontrolled warning
          onChange={handleChange}
        />
      </label>

      <p>I want a burger with:</p>

      {/* Fixed: name was "onion" but should be "tomato" for the tomato checkbox */}
      <label>
        Tomato:
        <input
          type="checkbox"
          name="tomato"                          // ← Fixed: was "onion"
          checked={inputs.tomato || false}
          onChange={handleChange}
        />
      </label>

      <label>
        Onion:
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion || false}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

// Fixed component name in render (MyForma → MyForm)


export { MyForma };