import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [formData, setFormData] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const changeHandler = (input, value) => {
    setFormData((prevData) => ({ ...prevData, [input]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.values(formData).some((value) => value === "")) {
      props.onInputHandler(false);
    } else {
      props.onInputHandler(formData);
    }
  };

  const onResetHanlder = () => {
    setFormData({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
    props.onInputHandler(true);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formData["current-savings"]}
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formData["yearly-contribution"]}
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={formData["expected-return"]}
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formData["duration"]}
            onChange={(event) => changeHandler("duration", event.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onResetHanlder}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
