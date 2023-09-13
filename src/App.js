import Header from "./Header/Header";
import InputForm from "./InputForm/InputForm";
import ResultTable from "./ResultTable/ResultTable";
import React, { useState } from "react";

function App() {
  let yearlyData = [];
  const [isFormValid, setIsFormValid] = useState(true);
  const [userInput, setuserInput] = useState("");

  const inputHandler = (userInput) => {
    if (!userInput) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
      setuserInput(userInput);
    }
  };

  if (isFormValid) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        key: i,
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <InputForm onInputHandler={inputHandler}></InputForm>

      {isFormValid && (<ResultTable items={yearlyData} userData={userInput}></ResultTable>)}
      {!isFormValid && <h2 className="alert">Please fill out all fields.</h2>}
    </div>
  );
}

export default App;
