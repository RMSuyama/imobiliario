import React, { useState } from 'react';

const MyComponent = () => {


  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );



};

export default MyComponent;
