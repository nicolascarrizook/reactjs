import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import React from 'react'

export const Item = ({ item }) => {

    const card = (
        <React.Fragment>
            <CardContent>
                <CardMedia
                    component="img"
                    height="150"
                    width={'100%'}
                    image={item.image}
                    alt="Alfajores de Chocolate"
                />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    {item.title}
                </Typography>
                <Typography variant="h5" component="div">
                    {item.price}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ minWidth: 275 }} >
            <Grid container spacing={3} alignItems="stretch">
                <Grid item xs={12} sm={4} md={4} spacing={3} >
                    <Card variant="outlined">{card}</Card>
                </Grid>
            </Grid>
        </Box>
    )
}
