import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([
    {
      id: Math.random(),
      "user-name": "mina",
      age: 21,
    },
    {
      id: Math.random(),
      "user-name": "Alex",
      age: 21,
    },
    {
      id: Math.random(),
      "user-name": "Chris",
      age: 21,
    },
  ]);

  const submitHandler = (newItem) => {
    setUsers((prevUsers) => {
      return [newItem, ...prevUsers];
    })
  };

  return (
    <div>
      <AddUser onSubmit={submitHandler}></AddUser>

      <UsersList items={users}></UsersList>
    </div>
  );
}

export default App;
