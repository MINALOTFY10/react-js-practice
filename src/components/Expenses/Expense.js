import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.obj[0].title}
        amount={props.obj[0].amount}
        date={props.obj[0].date}
      />
      <ExpenseItem
        title={props.obj[1].title}
        amount={props.obj[1].amount}
        date={props.obj[1].date}
      />
      <ExpenseItem
        title={props.obj[2].title}
        amount={props.obj[2].amount}
        date={props.obj[2].date}
      />
      <ExpenseItem
        title={props.obj[3].title}
        amount={props.obj[3].amount}
        date={props.obj[3].date}
      />
    </Card>
  );
}

export default Expenses;