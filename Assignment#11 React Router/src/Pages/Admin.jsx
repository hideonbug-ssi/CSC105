import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import meImage from '../assets/Me.jpg';

function Admin({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const squareImageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '60%',
  };

  return (
    <div style={containerStyle}>
      <img src={meImage} alt="my img" style={squareImageStyle}></img>
      <h1>This is Admin Page</h1>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Admin;
