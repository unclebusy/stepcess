import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function ButtonsGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="Test type button group" color="primary">
        <Button variant="contained" sx={{ backgroundColor: 'white', color: '#1976D2' }}>
          Frontend
        </Button>
        <Button>Backend</Button>
        <Button>Fullstack</Button>
      </ButtonGroup>
    </Box>
  );
}
