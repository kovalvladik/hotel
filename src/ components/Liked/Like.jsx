import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import './Like.css'



export default function IconCheckboxes({setIsLiked,isLiked}) {
    return (
        <div className='icon__container'>
            <Checkbox style={{lineHeight:0,margin:0}} icon={<FavoriteBorder  />} checkedIcon={<Favorite style={{color:'red'}} />} />

        </div>
    );
}
