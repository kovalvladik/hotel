import React from 'react';
import './Licked.css'
import SelectVariants from "./Selected";
import Like from "./Like";

const Liked = () => {
    return (
        <div className='liked__container'>
            <p className='liked__name'>Избранное</p>

            <SelectVariants/>
            <Like/>

        </div>
    );
};

export default Liked;
