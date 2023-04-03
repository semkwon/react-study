function App() {
  function handleClickEvent() {
    console.log("click!!");
  }
  return (
    <div>
      <h1 onClick={handleClickEvent}>click</h1>
      <h1
        onClick={() => {
          console.log("click!!!!");
        }}
      >
        click2
      </h1>
    </div>
  );
}

export default App;
