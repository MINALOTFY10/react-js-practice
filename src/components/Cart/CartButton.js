import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsArray = useSelector((state) => state.store.items);

  const clickHandler = () => {
    dispatch(toggleActions.toggleCart());
  };

  const numberOfItems = itemsArray.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
