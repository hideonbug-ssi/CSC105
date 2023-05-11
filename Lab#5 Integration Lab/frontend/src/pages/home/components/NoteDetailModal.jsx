import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
} from '@mui/material';
import { format } from 'fecha';

const NoteDetailModal = ({
  note = {},
  open = false,
  handleClose = () => {},
  handleEdit = () => {},
  handleDelete = () => {},
}) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography fontSize={24}>{note.title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={2}>{note.description}</DialogContentText>
        <DialogContentText color="gray" fontSize={14}>
          {note.updatedAt && format(new Date(note.updatedAt), 'DD/MM/YYYY hh:mm A')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="error" sx={{ textTransform: 'capitalize' }}>
          Delete
        </Button>
        <Button onClick={handleEdit} type="submit" sx={{ textTransform: 'capitalize' }}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteDetailModal;
