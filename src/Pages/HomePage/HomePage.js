import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductList from "../ProductList/ProductList";

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 2,
          padding: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#3f51b5",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Products
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: 3, color: "#666" }}
        >
          Explore our collection of amazing products.
        </Typography>
        <ProductList />
      </Box>
    </Container>
  );
};

export default Home;
