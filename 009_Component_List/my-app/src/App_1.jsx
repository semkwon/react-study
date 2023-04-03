function App() {
  return <Hello name="licat" />;
}

function Hello({ name }) {
  const num = [1, 2, 3, 4, 5];

  // list map을 이용하여 h1 태그들의 리스트를 만듭니다.

  return (
    <div>
      {num.map((i) => (
        <p key={i}>
          안녕, {name} {i}호
        </p>
      ))}
    </div>
  );
}

export default App;
