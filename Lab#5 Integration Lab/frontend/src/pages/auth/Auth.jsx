import React from 'react';
import { Box, Card, Link, TextField, Typography } from '@mui/material';

const Auth = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: 'linear-gradient(45deg,#ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        $: {
          '@keyframes gradient': {
            '0%': {
              backgroundPosition: '0% 50%',
            },
            '50%': {
              backgroundPosition: '100% 50%',
            },
            '100%': {
              backgroundPosition: '0% 50%',
            },
          },
        },
      }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 500,
          p: 4,
          gap: 4,
          backgroundColor: '#ffffffCC',
        }}
      >
        <Typography fontSize="2.5rem" fontWeight="700" my="50px">
          CSC105 integration!
        </Typography>
        <TextField fullWidth label={'Username'} placeholder="Type your username" />
        <TextField fullWidth label={'Password'} placeholder="Type your password" />
        <Link color="#999999" href="/signup" sx={{ alignSelf: 'end' }}>
          Sign Up?
        </Link>
        <button
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
          Login
        </button>
      </Card>
    </Box>
  );
};

export default Auth;
