import React, { useState } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost/api/v1/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Giriş hatası:", error);
      setError("Giriş başarısız, lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Log In
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          fullWidth
          label="E-Mail"
          variant="outlined"
          margin="normal"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't you have an account?{" "}
          <RouterLink to="/signUp">Sign Up</RouterLink>
        </Typography>
      </Box>
    </Container>
  );
};
export default LogIn;
