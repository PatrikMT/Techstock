import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box display="flex" flexDirection="column" variant="outlined" width="100%">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Paper style={{ padding: '20px', background:'#c8c8c8' }}>
              <Typography align="center" variant="h6" fontWeight="bold">CHAMADAS</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ padding: '20px', background:'#c8c8c8' }}>
              <Typography align="center" variant="h6" fontWeight="bold">INVENTARIO</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper style={{ padding: '20px', background:'#c8c8c8' }}>
              <Typography align="center" variant="h6" fontWeight="bold">TICKET</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;