import React, { useState } from "react";
import { loginUser } from "../LogIn/LogInApiService";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Grid,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Email, Lock } from "@mui/icons-material"; 

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

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Giriş hatası:", error);
      setError("Giriş başarısız, lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <AnimatedContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{ color: "#3f51b5", fontWeight: "bold" }}>
        Log In
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {error && (
          <Grid item xs={12}>
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          </Grid>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="E-Mail"
              variant="outlined"
              margin="normal"
              type="email"
              required
              onChange={(event) => setEmail(event.target.value)}
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
              required
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                startAdornment: <Lock sx={{ mr: 1 }} />, 
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <AnimatedButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
            >
              Login
            </AnimatedButton>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="body2" sx={{ mt: 2, color: "#6a1b9a" }}>
        Don't you have an account?{" "}
        <Link
          component={RouterLink}
          to="/signUp"
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
          Sign Up
        </Link>
      </Typography>
    </AnimatedContainer>
  );
};

export default LogIn;
