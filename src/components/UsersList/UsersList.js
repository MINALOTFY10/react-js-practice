import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card>
      {props.items.map((item) => (
        <div>
          <div key={item.id} className="item">
            {`${item["user-name"]} (${item.age} years old)`}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default UsersList;
