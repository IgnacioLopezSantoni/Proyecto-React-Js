import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ItemlistContainer = ({greeting}) => {
    return (

        <Typography variant="h1" gutterBottom sx={{ mt: '8vh' }}>
            {greeting}
        </Typography>
    )
}

export default ItemlistContainer