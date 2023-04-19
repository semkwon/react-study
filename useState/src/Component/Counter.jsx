import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(setCount + 1);
  };

  return (
    <>
      <div>{setCount}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default Counter;
