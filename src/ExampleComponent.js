import React, { useState } from 'react';

const ExampleComponent = () => {
  const [arg1, setArg1] = useState('arg1');
  const [arg2, setArg2] = useState('arg2');
  const [constant, setConstant] = useState('constant');
  const [operation, setOperation] = useState('AND');
  const [result, setResult] = useState(false);

  // Function to handle argument 1 change
  const handleArg1Change = (event) => {
    setArg1(event.target.value);
    performOperation(event.target.value, arg2, constant, operation);
  };

  // Function to handle argument 2 change
  const handleArg2Change = (event) => {
    setArg2(event.target.value);
    performOperation(arg1, event.target.value, constant, operation);
  };

  // Function to handle constant change
  const handleConstantChange = (event) => {
    setConstant(event.target.value);
    performOperation(arg1, arg2, event.target.value, operation);
  };

  // Function to handle operation change
  const handleOperationChange = (event) => {
    setOperation(event.target.value);
    performOperation(arg1, arg2, constant, event.target.value);
  };


  // Function to perform the selected operation
  const performOperation = (arg1, arg2, constant, operation) => {
    if (operation === 'AND') {
      setResult(arg1 === constant && arg2 === constant);
    } else if (operation === 'OR') {
      setResult(arg1 === constant || arg2 === constant);
    }
  };

  return (
    <div className='container'>
      <select value={arg1} onChange={handleArg1Change}>
        <option value="arg1"disabled >Argument 1</option>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
      </select> <br /> <br />
     

      <select value={arg2} onChange={handleArg2Change}>
        <option value="arg2" disabled>Argument 2</option>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
      </select> <br /> <br />

      <select value={constant} onChange={handleConstantChange}>
        <option value="constant" disabled>Constant</option>
        <option value="value1">True</option>
        <option value="value2">False</option>
      </select> <br /><br />

      <select value={operation} onChange={handleOperationChange}>
        <option value="AND">AND</option>
        <option value="OR">OR</option>
      </select>

      <p>Result: {result.toString()}</p>
    </div>
  );
};

export default ExampleComponent;
