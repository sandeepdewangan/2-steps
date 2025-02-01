import { useState } from "react";

const message = ["React is awesome", "React is good", "React is nice"];

export default function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function onNextClick() {
    if (step < 2) setStep(step + 1);
  }
  function onPrevClick() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Close</button>
      {isOpen && (
        <div>
          <div>
            <h2 style={step === 0 ? { color: "red" } : { color: "" }}>1</h2>
            <h2 style={step === 1 ? { color: "red" } : { color: "" }}>2</h2>
            <h2 style={step === 2 ? { color: "red" } : { color: "" }}>3</h2>
          </div>
          <div>{message[step]}</div>
          <div>
            <button onClick={() => onNextClick()}>Next</button>
            <button onClick={() => onPrevClick()}>Previous</button>
          </div>
        </div>
      )}
    </div>
  );
}
