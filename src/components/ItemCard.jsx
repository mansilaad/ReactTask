import React from 'react';
import { Button, Container, Grid,Typography } from '@mui/material';

const ItemCard = (props) => {
  const { image, title,description, quantity, price, date } = props.data;
  return (
    <>
    <Grid container direction="row" justifyContent="space-evenly">
    <Grid item md={3}>
 {image}
    </Grid>
    <Grid item md={9}>
{title}<br/>
{description},{quantity},{price},{date}
    </Grid>
       
    </Grid>

    </>
  )
}

export default ItemCard