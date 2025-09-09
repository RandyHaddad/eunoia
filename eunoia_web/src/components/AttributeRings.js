import React from 'react';
import { Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const Ring = styled(Box)(({ theme }) => ({
  width: 16,
  height: 16,
  borderRadius: '50%',
  border: `2px solid ${theme.palette.secondary.main}`,
  backgroundColor: alpha(theme.palette.secondary.main, 0.2),
}));

const AttributeRings = ({ attributes = [] }) => (
  <Box display="flex" gap={1}>
    {attributes.map((attr, idx) => (
      <Ring key={idx} title={attr} />
    ))}
  </Box>
);

export default AttributeRings;
