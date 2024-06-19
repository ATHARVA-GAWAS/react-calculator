// src/components/Display.js
import React from 'react';
import { Input } from 'antd';

const Display = ({ value }) => {
  return (
    <Input
      value={value}
      readOnly
      style={{
        marginBottom: '10px',
        textAlign: 'right',
        fontSize: '2em',
        height: '60px'
      }}
    />
  );
};

export default Display;

