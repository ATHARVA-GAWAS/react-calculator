import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator=()=>{
    const [input,setInput]=useState('');
    const [result,setResult]=useState('');

    const handleClick=(label)=>{
        if(label==='='){
            try{
                setResult(eval(input));
            }
            catch{
                setResult('Error');
            }
        }
        else if(label==='C'){
            setInput('');
            setResult('');
        }
        else {
            setInput(input + label);
        }
    };

    return(
        <div className="calculator">
            <Display value={input || result || '0'}/>
            <div className="buttons">
            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((label) => (
            <Button key={label} label={label} onClick={handleClick} />
            ))}
            </div>
        </div>
    );
};

export default Calculator;