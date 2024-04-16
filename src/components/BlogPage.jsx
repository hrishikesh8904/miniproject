import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Navbarcmp from "../Navbarcmp";
import Footer from "../Footer";
function BlogPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    // Check if user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Navbarcmp isSignedIn={isSignedIn} active="articles"></Navbarcmp>
      <div className="articles-one">
        <img src="happypeople.jpg" alt="" />
        <div className="articles-one-1">
          <h1>Soul Reflections</h1>
          <h3>Blogging the Journey to Mental Health</h3>
        </div>
      </div>
      <div className="blog-page-one">
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BlogPage;
