import Modal from "../UI/Modal";
import React, { useContext, useState, Fragment } from "react";
import "./Checkout.css";
import UseInput from "../hooks/use-input";
import CartContext from "../../store/cart-context";
import useHttp from "../hooks/use-http";
import ErrorScreen from "../UI/ErrorScreen";
import LoadingScreen from "../UI/LoadingScreen";
import CheckMarkCircle from "../UI/CheckMarkCircle";

const Checkout = (props) => {
  const [finishedOrder, setFinishedOrder] = useState(false);
  const cartCtx = useContext(CartContext);
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = UseInput((value) => /^[A-Za-z\s]{2,}$/.test(value));

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangedHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = UseInput((value) => value.length > 0);

  const {
    value: enteredCreditNum,
    isValid: enteredCreditNumIsValid,
    hasError: creditNumInputHasError,
    valueChangeHandler: creditNumChangedHandler,
    inputBlurHandler: creditNumBlurHandler,
    reset: resetCreditNumInput,
  } = UseInput((value) => /^\d{16}$/.test(value));

  const {
    value: enteredExpireDate,
    isValid: enteredExpireDateIsValid,
    hasError: expireDateInputHasError,
    valueChangeHandler: expireDateChangedHandler,
    inputBlurHandler: expireDateBlurHandler,
    reset: resetExpireDateInput,
  } = UseInput((value) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(value));

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredAddressIsValid &&
    enteredCreditNumIsValid &&
    enteredExpireDateIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredAddressIsValid ||
      !enteredCreditNumIsValid ||
      !enteredExpireDateIsValid
    ) {
      return;
    }

    const orderText = {
      user: {
        Name: enteredName,
        Address: enteredAddress,
        CreditNum: enteredCreditNum,
        ExpireDate: enteredExpireDate,
      },
      orderedItem: cartCtx.items,
    };

    enterOrderHandler(orderText);

    resetNameInput();
    resetAddressInput();
    resetCreditNumInput();
    resetExpireDateInput();

    setFinishedOrder(true);
  };

  const enterOrderHandler = async (orderText) => {
    const cartAfterEffect = () => {
        cartCtx.clearCart()
    }

    sendTaskRequest({
      url: "https://react-http-eca19-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: orderText,
    }, cartAfterEffect);
  };

  const content = (
    <Fragment>
      <div class="total-price">
        <div class="circle">${cartCtx.totalAmount}</div>
      </div>
      <form onSubmit={formSubmissionHandler}>
        <div
          className={
            nameInputHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Enter a valid name</p>
          )}
        </div>
        <div
          className={
            addressInputHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">Shipping Address</label>
          <input
            type="text"
            id="name"
            onChange={addressChangedHandler}
            onBlur={addressBlurHandler}
            value={enteredAddress}
          />
          {addressInputHasError && (
            <p className="error-text">Enter a valid Shipping address</p>
          )}
        </div>
        <div
          className={
            creditNumInputHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">Credit Card Number</label>
          <input
            type="text"
            id="name"
            onChange={creditNumChangedHandler}
            onBlur={creditNumBlurHandler}
            value={enteredCreditNum}
          />
          {creditNumInputHasError && (
            <p className="error-text">
              Enter a valid Credit Card Number (16 digits)
            </p>
          )}
        </div>
        <div
          className={
            expireDateInputHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">Expiration Date (MM/YY)</label>
          <input
            type="text"
            id="name"
            onChange={expireDateChangedHandler}
            onBlur={expireDateBlurHandler}
            value={enteredExpireDate}
          />
          {expireDateInputHasError && (
            <p className="error-text">Enter a valid Expiration Date (MM/YY)</p>
          )}
        </div>

        <div className="form-actions">
          <button className="cancel-button" onClick={props.onCancel}>
            Cancel
          </button>
          <button disabled={!formIsValid}>Pay Now</button>
        </div>
      </form>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className="checkout-container">
        <h2>Checkout</h2>
        {isLoading ? (
          <LoadingScreen />
        ) : error ? (
          <ErrorScreen
            errorMessage={
              <div>
                We have a problem! <br /> The order couldn't be send. Please
                come back later. 😓
              </div>
            }
          />
        ) : finishedOrder ? (
          <CheckMarkCircle />
        ) : (
          content
        )}
      </div>
    </Modal>
  );
};

export default Checkout;
