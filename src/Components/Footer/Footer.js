import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4A90E2",
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
          >
            <Typography variant="body2" align="center">
              © 2024 All Rights Reserved.
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <LinkedInIcon sx={{ marginRight: 1 }} />
              <Link
                href="https://www.linkedin.com/in/abdullahaydogann/"
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Abdullah Aydoğan
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Link
                  href="https://en.wikipedia.org/wiki/Certificate_of_confidentiality"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="#"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Terms of Use
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/contact"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
