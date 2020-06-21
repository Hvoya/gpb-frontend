import React from 'react'
import { Button, H2, Text, Grid, GridCol } from '@holism/core';
import Paper from 'atoms/Paper/Paper';

const MyProgressBlock = () => {
  return (
    <>
      <H2 style={{marginBottom: 16}}>Сегодня</H2>
      <Grid responsive="MD">
        <GridCol column={40}>
          <Paper>
            <div style={{ padding: 32 }}>
            </div>
          </Paper>
        </GridCol>
        <GridCol column={60}>
          <Paper>
            <div style={{ padding: 32 }}>
            </div>
          </Paper>
        </GridCol>
      </Grid>
    </>
  );
};

export default MyProgressBlock;