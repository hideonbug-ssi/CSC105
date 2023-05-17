import { Button, Card, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import Axios from '../../AxiosInstance';
import { AxiosError } from 'axios';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const CommentCard = ({ comment = { id: -1, msg: '' }, setComments = () => { } }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [functionMode, setFunctionMode] = useState('update');
  const [msg, setMsg] = useState(comment.msg);
  const [error, setError] = useState({ });
  const { user, setStatus } = useContext(GlobalContext);

  const checkValidateForm = () => {
    const error = {};
    if (msg == '') error.message = 'Comment cannot be empty';
    setError(error);
    if (Object.keys(error).length) return false;
    return true;
  };

  const submit = useCallback(async() => {
    if (functionMode === 'update') {
      // TODO implement update logic
      try {
        const userToken = Cookies.get('UserToken');
        if (!checkValidateForm()) return; // Check if the comment is not empty or blank        
        const response = await Axios.patch(
          '/comment',
          {
            text: msg,
            commentId: comment.id,
          },
          {
            headers: { Authorization: `Bearer ${userToken}` },
          }
        );
      
        if (response.data.success) {
          // update comment in the parent component
          comment.msg = response.data.data.text;
          setStatus({ severity: 'success', msg: 'Update success' });
          // console.log('Update success');
          cancelAction(); // to toggle off the confirm 
        } else {
          console.log('Failed to update comment');
        }
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }    
    } else if (functionMode === 'delete') {
      // Send DELETE request to the server
      try {
        const userToken = Cookies.get('UserToken');
        const response = await Axios.delete('/comment', {
          headers: { Authorization: `Bearer ${userToken}` },
          data: { commentId: comment.id }
        }
        );
        if (response.data.success) {
          // Perform any necessary actions after successful deletion
          setComments((comments) => comments.filter((c) => c.id !== comment.id));
          setStatus({ severity: 'success', msg: 'Comment deleted successfully' });
          // console.log('Comment deleted successfully');
          cancelAction(); // to toggle off the confirm
        } else {
          console.log('Failed to delete comment');
        }
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
    } else {
      // TODO setStatus (snackbar) to error
      console.log('error');
    }
  }, [functionMode, msg]);

  const changeMode = (mode) => {
    setFunctionMode(mode);
    setIsConfirm(true);
  };

  const cancelAction = () => {
    setFunctionMode('');
    setIsConfirm(false);
  };

  return (
    <Card sx={{ p: '1rem', m: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      {!(isConfirm && functionMode == 'update') ? (
        <Typography sx={{ flex: 1 }}>{comment.msg}</Typography>
      ) : (
        <TextField sx={{ flex: 1 }} 
          value={msg} 
          onChange={(e) => setMsg(e.target.value)}
          error={!!error.message}
          helperText={error.message}
        />
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