import {useEffect, useState} from 'react';
import './index.scss';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
 
  const operators = ['+', '-', '*', '/'];
 
  const calculate = (op1, op2, operator) => {
    switch (operator) {
      case '+':
        return op1 + op2;
      case '-':
        return op1 - op2;
      case '*':
        return op1 * op2;
      case '/':
        return op1 / op2;
      default:
        return 'Error';
    }
  };
 
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      const values = input.split(' ');
      const op1 = parseFloat(values[0]);
      const op2 = parseFloat(values[2]);
      const operator = values[1];

      if (op1 && op2 && operators.includes(operator)) {
        setResult(calculate(op1, op2, operator));
      } else {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };
 
  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-screen"
        value={result || input}
        readOnly
      />
      <div className="calculator-keys">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};
 

export default App;
