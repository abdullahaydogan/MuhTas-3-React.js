import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchBar from "../../Components/SearchBar/SearchBar";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  maxWidth: 220,
  margin: "0 auto",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  },
}));

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:7079/api/Product");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesQuery = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error: {error}</Alert>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <StyledCard>
              {product.photo && (
                <CardMedia
                  component="img"
                  image={`data:image/jpeg;base64,${product.photo}`}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                    maxHeight: "500px",
                  }}
                />
              )}
              <CardContent>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="h6" component="div" color="primary">
                    {product.name}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary">
                  <strong>Stock:</strong> {product.stock}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: "bold", fontSize: "1em" }}
                >
                  Price:{" "}
                  <span style={{ color: "#28a745" }}>
                    ${product.price.toFixed(2)}
                  </span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Category:</strong> {product.category}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
