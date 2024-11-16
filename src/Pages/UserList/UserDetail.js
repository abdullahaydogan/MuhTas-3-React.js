import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import { fetchUserById, deleteUser } from './UserListApi';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (err) {
        console.error('Error fetching user:', err);
        setError('Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      navigate('/userList'); 
    } catch (err) {
      console.error('Error deleting user:', err);
      setError('Failed to delete user');
    }
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ marginTop: '32px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        User Detail
      </Typography>
      <Typography variant="h5">{user.userName}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete User
      </Button>
    </div>
  );
};

export default UserDetail;
