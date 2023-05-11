import { Box, Link, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import Axios from '../../../AxiosInstance';
import { AxiosError } from 'axios';

const RegisterForm = ({ setIsLogin = () => {}, setStatus = () => {} }) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');

  const validateForm = () => { 
    let isValid = true;
    //check username
    if(!username){
      setUsernameError('Username is required');
      isValid = false;
    }

    //checl email
    if(!email){
      setEmailError('Email is required');
      isValid = false;
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)){
      setEmailError('Email is invalid');
      isValid = false;
    }

    //check password
    if(!password){
      setPasswordError('Password is required');
      isValid = false;
    } 

    if(!rePassword){
      setRePasswordError('Confirm password is required');
    }

    if(password !== rePassword){
      setRePasswordError('Confirm password is not match');
      isValid = false;
    }

    return isValid;
  };


  const handleSubmit = async () => {
    // TODO: Implement login
    // 1. validate form
    if(!validateForm()){
      return;
    }
    
    try {
    // 2. send request to server
      const response = await Axios.post('/register', {
        username,
        email,
        password,
        });
    // 3. if successful, change modal to login mode
      if(response.data.success){
        setIsLogin(true);
        setStatus({
          msg: response.data.message,
          severity: 'success',
        });
      }
    } catch (e) {
      // 4. if fail, show error message alert, and reset password fields
      setPassword('');
      setRePassword ('');
      //check if e are Axios error
      if(e instanceof AxiosError){
        if(e.response)
        //check if e.response exist
        return setStatus({
          msg: e.response.data.error,
          severity: 'error',
        });
      }
      //if e is not AxiosError or response doesn't exist, return error message
      return setStatus({
        msg: e.message,
        severity: 'error',
      })
    }
  };
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 5,
      }}
    >
      <Typography fontSize="1.25rem" fontWeight="400">
        CSC105 integration!
      </Typography>
      <Typography fontSize="2.5rem" fontWeight="700">
        Register
      </Typography>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        error={usernameError !== ''}
        helperText={usernameError}
        label="Username"
        placeholder="Type your username"
      />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        error={emailError !== ''}
        helperText={emailError}
        label="Email"
        placeholder="Type your email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        error={passwordError !== ''}
        helperText={passwordError}
        type="password"
        label="Password"
        placeholder="Type your password"
      />
      <TextField
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        fullWidth
        error={rePasswordError !== ''}
        helperText={rePasswordError}
        type="password"
        label="Confirm password"
        placeholder="Type your password"
      />
      <Link color="#999999" sx={{ alignSelf: 'end', cursor: 'pointer' }} onClick={() => setIsLogin(true)}>
        Already have an account?
      </Link>
      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          padding: '.25rem',
          fontSize: '1.5rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(90deg, black 50%, white 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0%',
          transition: 'all .2s ease-in-out',
        }}
        onMouseOver={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundPosition = '0% 0%';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundPosition = '100% 0%';
        }}
      >
        Sign up
      </button>
    </Box>
  );
};

export default RegisterForm;
