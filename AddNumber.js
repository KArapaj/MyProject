import React, { useState } from 'react';

function AddNumbers(props) {
 
  const [sum, setSum] = useState(0);

  function addNumbers() {
    const result = props.num1 + props.num2;
    setSum(result); 
  }

  return (
    <div className="App">
      <h1>Sum: {sum}</h1>
      <button onClick={addNumbers}>Add Numbers</button>
    </div>
  );
}

export default AddNumbers;
