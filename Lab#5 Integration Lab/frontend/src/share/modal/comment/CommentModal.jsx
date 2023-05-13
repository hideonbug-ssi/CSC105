import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import { useKeyDown } from '../../../hooks/useKeyDown';
import CommentCard from './components/CommentCard';
import Cookies from 'js-cookie';
import Axios from '../../AxiosInstance';
import { AxiosError } from 'axios';
import GlobalContext from '../../Context/GlobalContext';

const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const [textField, setTextField] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const { setStatus } = useContext(GlobalContext);

  useKeyDown(() => {
    handleAddComment();
  }, ['Enter']);
  
  useEffect(() => {
    // TODO: Implement get comment by user's token
    // 1. check if user is logged in
    const userToken = Cookies.get('UserToken');
    Axios.get('/comment', { headers: { Authorization: `Bearer ${userToken}` } }).then((res) => {
      // 3. set notes to state
      const comments = res.data.data.map((comment) => ({
        id: comment.id,
        msg: comment.text,
      }));
      setComments(comments);
    });
  }, []);

  const handleAddComment = async () => {
    // 1. validate form
    if(!validateForm()) return;
    // TODO implement logic
    setComments([...comments, { id: Math.random(), msg: textField }]);
    // 2. call API to create comment
    try{
      const userToken = Cookies.get('UserToken');
      const response = await Axios.post('/comment', {text:textField},{
        headers: { Authorization: `Bearer ${userToken}` },
      });
      // 3. if successful, add new comment to state and close modal
      if(response.data.success){
        setStatus({severity: 'success', msg: 'Create comment successfully'});
        setComments([...comments, { id: Math.random(), msg: textField }]);
        console.log('Create comment successfully');
        resetAndClose();
      }
    }catch(error){
      if(error instanceof AxiosError && error.response){
        setStatus({severity: 'error', msg: error.response.data.message});
      }else{
        setStatus({severity: 'error', msg: error.message});
      }
    }
  };

  const validateForm = () => {
    if (textField == ""){
      setError("Please input text!")
      return false;
    }
    setError("");
    setTextField("");
    return true;
  };

  const resetAndClose = () => {
    setTimeout(() => {
      setError("");
    }, 500);
    handleClose();
  };
  

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            placeholder="Type your comment"
            variant="standard"
            error={error !== ""}
            helperText={error}
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box
          sx={{
            overflowY: 'scroll',
            maxHeight: 'calc(400px - 2rem)',
            '&::-webkit-scrollbar': {
              width: '.5rem', // chromium and safari
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#999999',
              borderRadius: '10px',
            },
          }}
        >
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;
