import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    if (inputValue === '') {
      setInputValue('Rafael Suyama');
    }
  }

  return (
    <div>
    <h1>Quem é o cara mais bonito do mundo?</h1>
    
    <input value={inputValue} onInput={handleInput} />
    </div>
  );
};

export default Input;