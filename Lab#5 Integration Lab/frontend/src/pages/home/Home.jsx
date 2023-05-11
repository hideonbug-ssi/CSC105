import { useEffect, useState, useContext } from 'react';
import { Stack, Container, Typography, Grid } from '@mui/material';
import CustomButton from '../../share/components/CustomButton';
import NoteCard from './components/NoteCard';
import NoteDetailModal from './components/NoteDetailModal';
import NoteCreateModal from './components/NoteCreateModal';
import NoteEditModal from './components/NoteEditModal';
import GlobalContext from '../../share/Context/GlobalContext';
import Cookies from 'js-cookie';
import Axios from '../../share/AxiosInstance';
import { AxiosError } from 'axios';

const Home = () => {
  const { user, setStatus } = useContext(GlobalContext);

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [targetNote, setTargetNote] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // TODO: Implement get notes by user's token
    // 1. check if user is logged in
    const userToken = Cookies.get('UserToken');
    if (userToken !== undefined && userToken !== 'undefined') {
      // 2. call API to get notes
      Axios.get('/notes', { headers: { Authorization: `Bearer ${userToken}` } }).then((res) => {
        // 3. set notes to state
        setNotes(res.data.data);
      });
    }
  }, [user]);

  // Note Create Modal
  const handleNoteCreateOpen = () => {
    if (!user) {
      setStatus({
        msg: 'You must login to create note',
        severity: 'error',
      });
    } else {
      setOpenCreate(true);
    }

    setTimeout(() => setStatus(), 1000);
  };
  const handleNoteCreateClose = () => {
    setOpenCreate(false);
  };

  // Note Edit Modal
  const handleNoteEditOpen = () => {
    setOpenEdit(true);
  };
  const handleNoteEditClose = () => {
    setOpenEdit(false);
  };

  // Note Detail Modal
  const handleNoteDetailOpen = () => {
    setOpenDetail(true);
  };
  const handleNoteDetailClose = () => {
    setOpenDetail(false);
  };

  const handleTargetNoteChange = (note) => {
    setTargetNote(note);
    handleNoteDetailOpen();
  };

  // Edit Note
  const handleEdit = () => {
    handleNoteDetailClose();
    handleNoteEditOpen();
  };

  // Delete Note
  const handleDelete = async () => {
    // TODO: Implement delete note
    // 1. call API to delete note
    try {
      const userToken = Cookies.get('UserToken');
      const response = await Axios.delete(`/note/${targetNote.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (response.data.success) {
        setStatus({
          severity: 'success',
          msg: 'Delete note successfully',
        });
        setNotes(notes.filter((n) => n.id !== targetNote.id));
        handleNoteDetailClose();
      }
    } catch (error){
      // 3. if delete note failed, check if error is from calling API or not
      if(error instanceof AxiosError && error.response){
        setStatus({severity: 'error', msg: error.response.data.message});
      }else{
        setStatus({severity: 'error', msg: error.message});
      }
    }
  };

  return (
    <Container maxWidth="md">
      <NoteDetailModal
        note={targetNote}
        open={openDetail}
        handleClose={handleNoteDetailClose}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <NoteEditModal note={targetNote} open={openEdit} handleClose={handleNoteEditClose} setNotes={setNotes} />
      <NoteCreateModal open={openCreate} handleClose={handleNoteCreateClose} setNotes={setNotes} />
      <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={4}>
        <Typography fontSize={30}>Your notes</Typography>
        <CustomButton text="Create note" handle={handleNoteCreateOpen} fontSize={18} />
      </Stack>
      {user ? (
        notes.length === 0 ? (
          <Typography textAlign="center" fontSize={18} color="white" fontWeight={300} marginTop={8}>
            No note to show... <br />
            Let's create a new note.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {notes.map((note, index) => (
              <Grid item xs={4} key={index}>
                <NoteCard title={note.title} date={note.updatedAt} handleClick={() => handleTargetNoteChange(note)} />
              </Grid>
            ))}
          </Grid>
        )
      ) : (
        <Typography textAlign="center" fontSize={18} color="white" fontWeight={300} marginTop={8}>
          No note to show... <br />
          Please login to create a new note.
        </Typography>
      )}
    </Container>
  );
};

export default Home;
