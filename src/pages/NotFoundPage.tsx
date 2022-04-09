import React from 'react';
import { Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Typography
      variant="h6"
      sx={{ pt: 15, justifyContent: 'center', display: 'flex' }}
    >
      Not Found Page or You should login first
    </Typography>
  );
};

export default NotFoundPage;
