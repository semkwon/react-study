import { useState } from "react";

function App() {
  const [message, setMessage] = useState("여기를 주목하세요");

  const handleOnMounseEnter = () => {
    setMessage("안녕하세요!");
  };
  const handleOnMounseLeave = () => {
    setMessage("안녕히가세요!");
  };

  return (
    <div>
      <p onMouseEnter={handleOnMounseEnter} onMouseLeave={handleOnMounseLeave}>
        여기에 마우스를 올려보세요!
      </p>
      <div>{message}</div>
    </div>
  );
}

export default App;
