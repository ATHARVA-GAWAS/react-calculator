// src/components/Button.js
import React from 'react';
import { Button as AntButton } from 'antd';

const CalcButton = ({ label, onClick }) => {
  return (
    <AntButton
      type="primary"
      style={{ flex: 1, margin: '5px', height: '60px' }}
      onClick={() => onClick(label)}
    >
      {label}
    </AntButton>
  );
};

export default CalcButton;
