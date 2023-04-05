import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div> 
      <h1 className="typing-effect">This is About page</h1>
      <div className="button-container">
        <button onClick={navigateToHome}>Redirect</button>
      </div>
    </div>
  );
}

export default About;
