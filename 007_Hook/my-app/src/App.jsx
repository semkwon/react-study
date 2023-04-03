import react, { useState } from "react";

function App() {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? "❤️" : "";

  function clickLike() {
    setLike(like + 1);
    console.log(like);
  }

  return (
    <div style={{ border: "solid 1px", width: "500px" }}>
      <button onClick={clickLike}>like</button>
      <span>{heart}</span>
    </div>
  );
}

export default App;
