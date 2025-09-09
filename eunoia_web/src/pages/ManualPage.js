import React from 'react';
import { Container, Typography } from '@mui/material';
import SwipeableImageCards from '../components/SwipeableImageCards';
import data from '../assets/data.json';

const ManualPage = () => {
  const imagesData = data.map((item, idx) => ({
    id: idx,
    imgSrc: item.logo,
    attributes: item.tags || [],
  }));

  const handleSwipe = () => {};

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Manual
      </Typography>
      <SwipeableImageCards imagesData={imagesData} onSwipe={handleSwipe} />
    </Container>
  );
};

export default ManualPage;
