import * as React from 'react';
import { Box } from '@mui/material';

export const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxHeight: 'calc(100vh - 60px)',
        mt: '50px',
      }}
    >
      <Box
        sx={{
          width: '60vw',
          height: '80vh',
          borderRadius: '1rem',
          boxShadow: 10,
        }}
      ></Box>
    </Box>
  );
};
