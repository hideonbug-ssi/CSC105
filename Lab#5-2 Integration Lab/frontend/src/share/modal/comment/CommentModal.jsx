import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import Cookies from 'js-cookie';
import Axios from '../../../share/AxiosInstance';
import CommentCard from './CommentCard';

export const CommentContext = createContext();

const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const [textField, setTextField] = useState('');
  const [textFieldError, setTextFieldError] = useState('');
  const queryClient = useQueryClient();
  const { comments, setComments } = useContext(CommentContext);

  const addCommentMutation = useMutation(
    (comment) => {
      const userToken = Cookies.get('UserToken');
      return Axios.post(
        '/comment',
        { text: comment },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );
    },
    {
      onSuccess: (data) => {
        setTextField('');
        queryClient.invalidateQueries('comments');
        console.log('Create comment successfully');
        setComments((prevComments) => [
          ...prevComments,
          { id: data.data.id, msg: textField },
        ]);
      },
      onError: (error) => {
        setTextField('');
        if (error.response) {
          setStatus({
            msg: error.response.data.error,
            severity: 'error',
          });
        } else {
          setStatus({
            msg: error.message,
            severity: 'error',
          });
        }
      },
    }
  );

  useEffect(() => {
    const userToken = Cookies.get('UserToken');
    if (userToken !== undefined && userToken !== 'undefined') {
      queryClient.invalidateQueries('comments');
    }
  }, []);

  const handleAddComment = () => {
    if (!validateForm()) return;
    addCommentMutation.mutate(textField);
  };

  const validateForm = () => {
    let isValid = true;
    if (!textField) {
      setTextFieldError('Comment is required');
      isValid = false;
    }
    return isValid;
  };

  const { data: commentsData, isLoading, isError } = useQuery('comments', async () => {
    const userToken = Cookies.get('UserToken');
    const response = await Axios.get('/comment', { headers: { Authorization: `Bearer ${userToken}` } });
    return response.data.data.map((el) => ({ id: el.id, msg: el.text }));
  });

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
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box sx={{ overflowY: 'scroll', maxHeight: 'calc(400px - 2rem)' }}>
          {isLoading ? (
            <div>Loading comments...</div>
          ) : isError ? (
            <div>Error fetching comments</div>
          ) : (
            commentsData.map((comment) => (
              <CommentCard key={comment.id} sx={{ p: '1rem', m: '0.5rem' }}>
                {comment.msg}
              </CommentCard>
            ))
          )}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;
