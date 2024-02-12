import React, { useState } from 'react'
import { evaluate } from 'mathjs';
import './css/calc.css';

export const Calc = () => {

  const [input, setInput] = useState("");
  const[result, setResult] = useState(0);

  const handleNumber = (number)=>{

      setInput(input + number);
  };

  const handleMethod = (operator)=>{
      setInput(input + operator);
  };

  const handleEqualClick = () => {
    try {
        const evaluatedResult = evaluate(input);
        setResult(evaluatedResult);
        setInput(evaluatedResult.toString());
    } catch (error) {
        console.log('Error:', error);
    }
  };

  const handleDeleteClick = () => {
      setInput(input.slice(0, -1));
  };

  return (
    <div>
        <div className="mname"><h1>Calculator</h1></div>
        <div className="maincontainer">
            <div className="display">{input || result}</div>

            <div className="methods">
                <ul>
                    <li><button onClick={() => handleNumber('7')}>7</button></li>
                    <li><button onClick={() => handleNumber('8')}>8</button></li>
                    <li><button onClick={() => handleNumber('9')}>9</button></li>
                    <li><button onClick={()=> handleMethod('+')}>+</button></li>
                    
                </ul>
                <ul>
                    <li><button onClick={() => handleNumber('4')}>4</button></li>
                    <li><button onClick={() => handleNumber('5')}>5</button></li>
                    <li><button onClick={() => handleNumber('6')}>6</button></li>
                    <li><button onClick={()=> handleMethod('-')}>-</button></li>
                    
                </ul>
                <ul>
                    <li><button onClick={() => handleNumber('1')}>1</button></li>
                    <li><button onClick={() => handleNumber('2')}>2</button></li>
                    <li><button onClick={() => handleNumber('3')}>3</button></li>
                    <li><button onClick={()=> handleMethod('*')}>*</button></li>
                    
                </ul>
                <ul>
                    
                    <li><button onClick={()=> handleMethod('.')}>.</button></li>
                    <li><button onClick={()=> handleMethod('/')}>/</button></li>
                    <li><button onClick={handleEqualClick}>=</button></li>
                    <li><button onClick={handleDeleteClick}>DEL</button></li>
                    
                    
                </ul>
                
            </div>
        </div>
    </div>
  )
}