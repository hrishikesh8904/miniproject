import React from "react";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Findhelp from "./components/Findhelp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="signincontainer">
                <SignIn />
                <SignUp />
              </div>
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/Findhelp" element={<Findhelp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
