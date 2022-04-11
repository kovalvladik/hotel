import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import './Like.css'



export default function IconCheckboxes({setIsLiked,id,rr,isLiked}) {

    const handleChange = (event) => {
        setIsLiked(event.target.checked);
        rr(id)
    };

    return (
        <div className='icon__container'>
            <Checkbox
                onChange={handleChange}
                checked={isLiked}
                style={{lineHeight:0,margin:0}} icon={<FavoriteBorder  />} checkedIcon={<Favorite style={{color:'red'}} />} />

        </div>
    );
}
