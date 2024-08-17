import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HeaderBox from './HeaderBox';
import ButtonsGroupTestType from '../ui/ButtonsGroupTestType';
import ButtonsGroupLanguage from '../ui/ButtonsGroupLanguage';
import ThemeSwitcher from '../ui/ThemeSwitcher';

export default function HeaderXl() {
  return (
    <HeaderBox type="xl">
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <Box
                component="img"
                src="/images/logo.svg"
                alt="logo image"
                sx={{ height: '36px', borderRadius: '20%' }}
              />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              StepCess
            </Typography>
          </Box>
          <ButtonsGroupTestType />
          <Box sx={{ display: 'flex' }}>
            <ThemeSwitcher />
            <ButtonsGroupLanguage />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </HeaderBox>
  );
}
