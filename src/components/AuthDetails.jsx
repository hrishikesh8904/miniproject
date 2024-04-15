import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  function userSignOut() {
    signOut(auth).then(() => {
      console.log("Signed out Successfully");
    });
  }
  return (
    <div>
      {authUser ? (
        <div>
          <p>Signed In</p>
          <button onClick={userSignOut}>SignOut</button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
}
export default AuthDetails;
