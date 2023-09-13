import "./AddUser.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModel";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const changeHandler = (input, value) => {
    if (input === "user-name") {
      setUserName(value);
    } else {
      setAge(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    if (isNaN(parseFloat(age)) && !isFinite(age)) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age.',
      });
      return;
    }
    let newUser = {
      id: Math.random(),
      "user-name": userName,
      age: age,
    };
    props.onSubmit(newUser);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className="form" onSubmit={submitHandler}>
          <p>
            <label htmlFor="user-name">User Name</label>
            <input
              type="text"
              id="user-name"
              value={userName}
              onChange={(event) =>
                changeHandler("user-name", event.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(event) => changeHandler("age", event.target.value)}
            />
          </p>
          <p className="actions">
            <button type="submit" className="button">
              Add User
            </button>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
