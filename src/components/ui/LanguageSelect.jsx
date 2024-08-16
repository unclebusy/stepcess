import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PublicIcon from '@mui/icons-material/Public';

export default function LanguageSelect() {
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
    >
      <PublicIcon />
    </IconButton>
  );
}
