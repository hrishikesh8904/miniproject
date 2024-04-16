import React from "react";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Findhelp from "./components/Findhelp";
import Tracker from "./components/Tracker";
import SignInPage from "./components/SignInPage";
import BlogPage from "./components/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignInpage" element={<SignInPage />} />
          <Route path="Tracker" element={<Tracker />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/Findhelp" element={<Findhelp />} />
          <Route path="/BlogPage" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
