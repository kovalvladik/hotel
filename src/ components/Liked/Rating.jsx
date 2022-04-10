import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useEffect} from "react";

export default function BasicRating({props}) {
    const [value, setValue] = React.useState(2);
    useEffect(()=>{
        if(props>5){

        }
        setValue(props)
    },[props])

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={value} readOnly />

        </Box>
    );
}
