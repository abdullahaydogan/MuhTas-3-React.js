import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Alert,
  Button,
  Avatar,
} from '@mui/material';
import { fetchUsers } from './UserListApi';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) return <CircularProgress style={{ display: 'block', margin: 'auto' }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#3f51b5' }}>
        User List
      </Typography>
      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
            elevation={3}
             sx={{ transition: '0.3s', '&:hover': { boxShadow: 20, transform: 'scale(1.05)' }, 
             borderRadius: '10px' }}
             onClick={() => navigate(`/user/${user.id}`)} >
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 56, height: 56, mr: 2, bgcolor: '#3f51b5' }}>
                  <PersonIcon sx={{ fontSize: 40, color: 'white' }} />
                </Avatar>
                <Typography variant="h5" component="div">
                  {user.userName}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => navigate(`/user/${user.id}`)}
                >
                 View Profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserList;
