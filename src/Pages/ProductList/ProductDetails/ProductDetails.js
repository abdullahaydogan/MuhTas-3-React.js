import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7079/api/Product/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      try {
        await axios.delete(`https://localhost:7079/api/Product/${id}`);
        alert("Product deleted successfully");
        navigate("/products");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleUpdate = () => {
    navigate(`/product/${id}/update`);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error: {error}</Alert>;
  if (!product) return <p className="not-found">Product not found.</p>;

  return (
    <Container maxWidth="sm" sx={{ mt: 7 }}>
      <Card>
        {product.photo && (
          <img
            className="product-image"
            src={`data:image/jpeg;base64,${product.photo}`}
            alt={product.name}
            style={{
              width: "100%", // Genişliği %100 yaparak kutunun tamamını kaplamasını sağlar
              height: "auto", // Orantılı yükseklik için
              borderRadius: "8px", // Kenarları yuvarlatır
              objectFit: "cover", // Fotoğrafın alanı kaplamasını sağlar
              maxHeight: "500px", // Fotoğraf yüksekliğini sınırlandırır
            }}
          />
        )}
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1">
            <strong>Stock:</strong> {product.stock}
          </Typography>
          <Typography variant="body1">
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1">
            <strong>Category:</strong> {product.category}
          </Typography>
        </CardContent>
        <div style={{ padding: "16px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            sx={{ mr: 2 }}
          >
            Update
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default ProductDetail;
