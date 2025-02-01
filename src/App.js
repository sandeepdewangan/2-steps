const message = ["React is awesome", "React is good", "React is nice"];

export default function App() {
  const step = 0;
  function onNextClick() {
    console.log(step);
  }

  return (
    <div>
      <div>
        <h2 style={step === 0 ? { color: "red" } : { color: "" }}>1</h2>
        <h2 style={step === 1 ? { color: "red" } : { color: "" }}>2</h2>
        <h2 style={step === 2 ? { color: "red" } : { color: "" }}>3</h2>
      </div>
      <div>{message[step]}</div>
      <div>
        <button onClick={() => onNextClick()}>Next</button>
        <button>Previous</button>
      </div>
    </div>
  );
}
