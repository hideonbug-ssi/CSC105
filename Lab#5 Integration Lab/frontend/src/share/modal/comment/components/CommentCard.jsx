import { Button, Card, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import Axios from '../../../AxiosInstance';
import { AxiosError } from 'axios';

const CommentCard = ({ comment = { id: -1, msg: '' } }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [functionMode, setFunctionMode] = useState('update');
  const [msg, setMsg] = useState(comment.msg);

  const submit = useCallback(() => {
    if (functionMode === 'update') {
      // TODO implement update logic
      const userToken = Cookies.get('UserToken');
      Axios.patch(
        '/comment',
        {
          text: msg,
          commentId: comment.id,
        },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      )
        .then((response) => {
          if (response.data.success) {
            // update comment in the parent component
            setMsg(response.data.data.text)
            console.log('update success');
            setIsConfirm(false); // to toggle off the confirm 
          } else {
            console.log('Failed to update comment');
          }
        })
        .catch((error) => {
          if (error instanceof AxiosError && error.response) {
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        });
        
    } else if (functionMode === 'delete') {
      // TODO implement delete logic
      console.log('delete');
    } else {
      // TODO setStatus (snackbar) to error
      console.log('error');
    }
  }, [functionMode, msg]);

  const changeMode = (mode) => {
    setFunctionMode(mode);
    setIsConfirm(true);
  };

  return (
    <Card sx={{ p: '1rem', m: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      {!(isConfirm && functionMode == 'update') ? (
        <Typography sx={{ flex: 1 }}>{comment.msg}</Typography>
      ) : (
        <TextField sx={{ flex: 1 }} value={msg} onChange={(e) => setMsg(e.target.value)} />
      )}
      {!isConfirm ? (
        <Button onClick={() => changeMode('update')} variant="outlined" color="info">
          update
        </Button>
      ) : (
        <Button onClick={submit} variant="outlined" color="success">
          confirm
        </Button>
      )}
      {!isConfirm ? (
        <Button onClick={() => changeMode('delete')} variant="outlined" color="error">
          delete
        </Button>
      ) : (
        <Button onClick={cancelAction} variant="outlined" color="error">
          cancel
        </Button>
      )}
    </Card>
  );
};

export default CommentCard;