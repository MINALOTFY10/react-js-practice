import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import { useSelector,useDispatch } from "react-redux";
import { toggleActions } from "../../store";

const Cart = (props) => {
  const itemsArray = useSelector((state) => state.store.items);
  const totalPrice = useSelector((state) => state.store.totalPrice);
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(toggleActions.toggleCart())
  }

  const cartItem = itemsArray.map((item) => (
    <li>
      {
        <CartItem
          item={{
            key: item.id,
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            total: item.quantity * item.price,
            price: item.price,
            description: item.description,
          }}
        />
      }
    </li>
  ));

  return (
    <Modal onClose={closeCartHandler}>
      <Card className={classes.cart}>
        <div className={classes["cart-header"]}>
          <h2>Shopping Cart</h2>
          <button onClick={closeCartHandler}>Exit</button>
        </div>
        {totalPrice != 0 ? <p>Total Price: ${totalPrice.toFixed(2)}</p> : ""}
        
        <ul>{itemsArray.length == 0 ? "The Cart Is Empty" : cartItem}</ul>
      </Card>
    </Modal>
  );
};

export default Cart;
