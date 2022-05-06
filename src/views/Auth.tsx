import { Grid } from '@mui/material';
import { NearLogin } from 'components/Auths';
import React from 'react';

export const Auth: React.FC = () => {
  return (
    <Grid container direction={'column'} alignItems="center">
      <NearLogin />
    </Grid>
  );
};
