import React, { useEffect } from "react";
import "./App.css";
import Imessage from "./Imessage";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/UserSlice";
import Login from "./Login";
import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <Imessage />
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
