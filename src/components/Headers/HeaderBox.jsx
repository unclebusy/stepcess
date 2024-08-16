import * as React from 'react';
import Box from '@mui/material/Box';

export default function HeaderBox({ children, type }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: [type == 'xs' ? 'block' : 'none'],
          sm: [type == 'sm' ? 'block' : 'none'],
          xl: [type == 'xl' ? 'block' : 'none'],
        },
      }}
    >
      {children}
    </Box>
  );
}
