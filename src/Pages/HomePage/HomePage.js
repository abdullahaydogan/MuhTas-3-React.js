import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ProductList from "../ProductList/ProductList";

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box 
        sx={{ 
          backgroundColor: "#f9f9f9", // Açık gri arka plan
          borderRadius: 2,
          boxShadow: 2, // Gölge efekti
          padding: 3, // İçerik için boşluk
        }}
      >
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ 
            color: "#3f51b5", // Başlık rengi
            fontWeight: "bold", // Kalın başlık
            textTransform: "uppercase", // Büyük harfle yazı
          }}
        >
          Products
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ marginBottom: 3, color: "#666" }} // Açık gri alt yazı
        >
          Explore our collection of amazing products. 
        </Typography>
        <ProductList />
      </Box>
    </Container>
  );
};

export default Home;
