
import React, { useState } from 'react';
import { signUp } from './SignUpApi';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Alert,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Card for SignUp
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(3),
  textAlign: 'center',
  marginTop: theme.spacing(8),
}));

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      setError('Passwords do not match!');
      return;
    }
    setError(''); 

    try {
      const response = await signUp({ userName: username, email, password });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <StyledCard>
        <Typography variant="h4" gutterBottom>
          Create Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Repeat Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
                required
              />
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                disabled={!password || password !== passwordRepeat}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Link component={RouterLink} to="/logIn">
            Log In
          </Link>
        </Typography>
      </StyledCard>
    </Container>
  );
};

export default SignUp;
