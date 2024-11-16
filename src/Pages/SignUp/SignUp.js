import React, { useState } from "react";
import { signUp } from "./SignUpApi";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Alert,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle, Email, Lock } from "@mui/icons-material";


const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: "background-color 0.3s ease, transform 0.3s ease",
  backgroundColor: "#1976d2",
  color: "white",
  "&:hover": {
    backgroundColor: "#115293",
    transform: "scale(1.05)",
  },
  borderRadius: "8px",
}));


const AnimatedContainer = styled(Container)(() => ({
  marginTop: "32px",
  textAlign: "center",
  opacity: 0,
  animation: "fadeIn 1s forwards",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));


const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
  transition: "all 0.3s ease",
  "&:focus": {
    backgroundColor: "#ffffff",
    borderColor: "#3f51b5",
  },
  "&:hover": {
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.02)",
  },
}));

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setSuccess(false);

    try {
      const response = await signUp({ userName: username, email, password });

      if (response.status === 200) {
        setSuccess(true);
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordRepeat("");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatedContainer maxWidth="sm">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#3f51b5", fontWeight: "bold" }}
      >
        Create Account
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputProps={{
                startAdornment: <AccountCircle sx={{ mr: 1 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: <Email sx={{ mr: 1 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Repeat Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              required
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1 }} />,
              }}
            />
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            </Grid>
          )}

          {success && (
            <Grid item xs={12}>
              <Alert severity="success" sx={{ mt: 2 }}>
                Registration successful!
              </Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <AnimatedButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              // disabled={
              //   !username || !email || !password || password !== passwordRepeat
              // }
            >
              Sign Up
            </AnimatedButton>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="body2" sx={{ mt: 2, color: "#6a1b9a" }}>
        Already have an account?{" "}
        <Link
          component={RouterLink}
          to="/logIn"
          sx={{
            fontWeight: "bold",
            textDecoration: "underline",
            color: "#3f51b5",
            "&:hover": {
              color: "#1976d2",
              transition: "color 0.3s ease",
            },
          }}
        >
          Log In
        </Link>
      </Typography>
    </AnimatedContainer>
  );
};

export default SignUp;
