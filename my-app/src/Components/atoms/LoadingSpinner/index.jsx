import { CircularProgress } from '@mui/material';
import React from 'react';
import { LoadingContainer } from './styles';

const LoadingSpinner = ({ colour }) => {
  return (
    <LoadingContainer colour={colour}>
      <CircularProgress size="5rem" />
    </LoadingContainer>
  );
};

export default LoadingSpinner;