import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function Block() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#9b2d2df0',
            dark: '#9b2d2df0',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  );
}