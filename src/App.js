import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/index";

function App() {
  const auth = useSelector((state) => state.auth.isAuthunticeted);

  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
