import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { storeActions } from "../../store";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const onAddToCartHanlder = () => {
    dispatch(
      storeActions.addItem({ id, title, price, description, quantity: 1 })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onAddToCartHanlder}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
