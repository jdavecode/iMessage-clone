import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="/img/iMessage-logo.jpg" alt="" />
      </div>

      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;
