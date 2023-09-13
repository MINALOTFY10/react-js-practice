import React from "react";
import "./ResultTable.css";
import ResultSection from "../ResultSection/ResultSection";

const ResultTable = (props) => {
  console.log("Result Table: ", props.userData);
  if (props.items === 0) {
    return <h2 style={{textAlign: "center"}}>Please Enter The Complete Data</h2>;
  } else {
    return (
      <div>
        <table className="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <ResultSection
            resultData={props.items}
            userData={props.userData}
          ></ResultSection>
        </table>
      </div>
    );
  }
};

export default ResultTable;
