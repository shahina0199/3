import { useState } from "react";

 

const Content = () => {
  const [count, setCount] = useState(5);
  console.log(count);
  
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount= () => {
    setCount(count - 1);
  };
  

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount} >
        Increase
      </button>
      <button onClick={decreaseCount}>
      decrease
      </button>

      
    </div>
  );
};

export default Content;
