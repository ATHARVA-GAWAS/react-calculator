// src/components/Calculator.js
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        const evalResult = eval(input);  // Using eval for simplicity; consider using a safer approach in production.
        setResult(evalResult);
        setInput(evalResult.toString());
      } catch {
        setResult('Error');
        setInput('');
      }
    } else if (label === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + label);
      setResult('');
    }
  };

  return (
    <div className="calculator">
      <Display value={input || '0'} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
