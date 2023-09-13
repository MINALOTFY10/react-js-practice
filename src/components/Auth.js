import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Auth = () => {
  const dispatch = useDispatch();

  const formSubmitHanlder = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHanlder}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
