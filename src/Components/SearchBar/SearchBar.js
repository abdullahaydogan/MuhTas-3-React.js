// src/Components/SearchBar.js
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
              <SearchIcon sx={{ color: 'text.secondary' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: '100%', sm: '80%', md: '60%' },
          backgroundColor: 'background.paper',
          borderRadius: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Varsayılan kenarlığı gizle
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.2)', // Hafif gri kenarlık
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main', // Odaklandığında belirgin renk
              boxShadow: '0 0 8px rgba(25, 118, 210, 0.5)', // Yumuşak mavi gölge
            },
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 0, // Mavi dikdörtgeni tamamen kaldır
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
