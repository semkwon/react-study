import { useState } from "react";
import D from "./D";

function C() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="border-2 border-black h-32 w-32 mb-3 bg-gray-300 flex flex-col justify-center items-center">
        {count}
        <button
          onClick={onIncrease}
          className="border-black border-2 px-2 py-1 mb-2"
        >
          +1
        </button>
        <button
          onClick={onDecrease}
          className="border-black border-2 px-2 py-1"
        >
          -1
        </button>
      </div>
      <D />
    </>
  );
}

export default C;
