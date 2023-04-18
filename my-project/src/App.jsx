import A from "./components/A";
function App() {
  return (
    <>
      <div className="min-h-screen bg-pink-100 flex justify-center items-center flex-col ">
        <div className="border-2 border-black h-32 w-32 mb-3 bg-green-100">
          hello react! APP
        </div>
        <A />
      </div>
    </>
  );
}

export default App;
