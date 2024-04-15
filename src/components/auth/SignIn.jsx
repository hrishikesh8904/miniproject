import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function passwordHandler(event) {
    setPassword(event.target.value);
  }
  function signIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential);
      history("/Home");
    });
  }
  return (
    <div>
      <form onSubmit={signIn}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={emailHandler}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={passwordHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default SignIn;
