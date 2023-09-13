const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultSection = (props) => {
  console.log("ResultSection: ", props.myData);
  return (
    <tbody>
      {props.resultData.map((item) => (
        <tr>
          <td>{item["year"]}</td>
          <td>{formatter.format(item["savingsEndOfYear"])}</td>
          <td>{formatter.format(item["yearlyInterest"])}</td>
          <td>
            {formatter.format(
              item.savingsEndOfYear -
              props.userData["current-savings"] -
              item.yearlyContribution * item.year
            )}
          </td>
          <td>
            {formatter.format(
              props.userData["current-savings"] +
              item.yearlyContribution * item.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResultSection;
