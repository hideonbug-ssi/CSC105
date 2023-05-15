import React, { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CustomButton from './CustomButton';
import Axios from '../AxiosInstance';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useState } from 'react';
import { useQuery } from 'react-query';


const Navbar = ({ handleOpen = () => { }}) => {
  const { user, setUser } = useContext(GlobalContext);
  const [startFetch, setStartFetch] = useState(false);

  useEffect(() => {
    const userToken = Cookies.get('UserToken');
    setStartFetch(!(userToken == null || userToken == 'undefined'));
  }, [user]);

  const fetchUser = async () => {
    const userToken = Cookies.get('UserToken');
    return await Axios.get('/me', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  };

  useQuery('user', fetchUser, {
    onSuccess: (data) => {
      setUser({
        username: data.data.username,
        email: data.data.email,
      });
    },
    enalbled: startFetch,
  });

  const logout = () => {
    setUser();
    Cookies.remove('UserToken');
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      spacing={2}
      sx={{
        position: 'sticky',
        zIndex: 10,
        marginBottom: '8px',
        padding: '16px',
      }}
    >
      {user ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Typography>{user.username}</Typography>
          <CustomButton text="Log out" handle={logout} />
        </Box>
      ) : (
        <CustomButton text="Log in" handle={handleOpen} />
      )}
    </Stack>
  );
};

export default Navbar;
