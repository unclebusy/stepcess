import React from 'react';
import { Box } from '@mui/material';

export const MainBox = ({ children }) => {
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
          height: 'calc(80vh - 60px)',
          borderRadius: '1rem',
          boxShadow: 10,
          display: 'grid',
          gridTemplateRows: ' 0fr 1fr 1fr',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
