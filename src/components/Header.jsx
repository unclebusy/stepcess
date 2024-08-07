import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ height: '60px', boxShadow: 10 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/images/logo.svg" alt="logo" style={{ height: '28px', borderRadius: '20%' }} />
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              marginLeft: '1rem',
              color: 'inherit',
            }}
          >
            STEPCESS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
