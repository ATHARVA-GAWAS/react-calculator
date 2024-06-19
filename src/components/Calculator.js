// src/components/Calculator.js
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import CalcButton from './Button';
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

  const buttonLabels = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div style={{ width: '400px', margin: '50px auto' }}>
      <Display value={input || '0'} />
      <Row gutter={[5, 5]}>
        {buttonLabels.map((label) => (
          <Col span={6} key={label}>
            <CalcButton label={label} onClick={handleClick} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Calculator;
