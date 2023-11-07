import { useState } from "react";
import InputSection from "./components/InputSection";
import Result from "./components/Result";

const INITIAL_INVEST = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [invest, setInvest] = useState({ ...INITIAL_INVEST });
  const inputIsValid = invest.duration >= 1 && invest.duration <= 25;
  function handleInputChange(event) {
    const inputName = event.target.id;
    const inputValue = +event.target.value;
    setInvest((prevInvest) => {
      return {
        ...prevInvest,
        [inputName]: inputValue,
      };
    });
  }

  return (
    <div>
      <InputSection invest={invest} onSelect={handleInputChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration between 1 to 25 </p>
      )}
      {inputIsValid ? <Result invest={invest} /> : null}
    </div>
  );
}
export default App;
