import { useState } from "react";

function D() {
  const [fruits, setFruits] = useState("");
  const onSubmitCreate = () => console.log({ fruits });
  return (
    <>
      <form onSubmit={onSubmitCreate}>
        <input
          type="text"
          value={fruits}
          onChange={(e) => setFruits(e.target.value)}
        />
        <input type="submit" value={"추 가"} />
      </form>
    </>
  );
}

export default D;
