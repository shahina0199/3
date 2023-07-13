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
    <div className="text-center">
      <h1 className="text-center">Count:{count}</h1>
      <button onClick={increaseCount} className="bordar:1px, padding:20px 30px">
        Increase
      </button>
      <button onClick={decreaseCount} className="bordar:1px, padding:20px 30px">
      decrease
      </button>

      
    </div>
  );
};

export default Content;
