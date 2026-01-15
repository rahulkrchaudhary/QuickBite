import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

export const BackendLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0f172a',
        gap: 3
      }}
    >
      <CircularProgress size={60} sx={{ color: '#e91e63' }} />
      <Typography variant="h5" color="white" fontWeight="500">
        Fetching details from server, please wait…
      </Typography>
      <Typography variant="body2" color="gray">
        Starting backend services
      </Typography>
    </Box>
  );
};