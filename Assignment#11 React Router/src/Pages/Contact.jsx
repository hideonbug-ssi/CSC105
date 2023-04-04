import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  
  return (
    <div>
      <h1>This is Contact page</h1>
      <div className="button-container">
        <button onClick={navigateToHome}>Redirect</button>
      </div>
    </div>
  );
}

export default Contact;
