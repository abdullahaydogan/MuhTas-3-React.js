import React from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box
      sx={{
        mb: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'inherit', fontSize: '1.5rem' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          backgroundColor: '#f5f5f5', // Yumuşak arka plan rengi
          borderRadius: '30px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Daha belirgin gölge
          transition: 'all 0.3s ease', // Tüm geçişler için daha yumuşak bir efekt
          '&:hover': {
            backgroundColor: '#e0e0e0', // Üzerine gelindiğinde arka plan rengi
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Varsayılan kenarlığı gizle
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Üzerine gelindiğinde kenarlığı gizle
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Odaklandığında kenarlığı gizle
              boxShadow: '0 0 8px rgba(25, 118, 210, 0.5)', // Yumuşak mavi gölge
            },
          },
          '& .MuiOutlinedInput-input': {
            fontFamily: 'Arial, sans-serif', // Daha modern bir yazı tipi
            fontSize: '1rem',
            color: '#333', // Yazı rengi
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
