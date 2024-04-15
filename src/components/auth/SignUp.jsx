import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function emailHandler(event) {
    setEmail(event.target.value);
  }
  function passwordHandler(event) {
    setPassword(event.target.value);
  }
  function signUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log(userCredential);
      }
    );
  }
  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
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
export default SignUp;
