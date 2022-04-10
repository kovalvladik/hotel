import React from 'react';
import './Licked.css'
import SelectVariants from "./Selected";
import Like from "./Like";
import {useSelector} from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import BasicRating from "./Rating";
import IconCheckboxes from "./Like";

const Liked = () => {
    const likes = useSelector(state => state.like)

    console.log(likes)
    return (
        <div className='liked__container'>
            <p className='liked__name'>Избранное</p>
            {likes.map((el)=>(
                <div>{el?.label}</div>
                // <div className='item__container'>
                //     <div className='item_icon__container'>
                //         <HomeIcon fontSize='large'/>
                //     </div>
                //     <div className='item_name__container'>
                //         <p className=''>{el?.label}</p>
                //         <p className=''> day</p>
                //         <BasicRating props={el?.id}/>
                //     </div>
                //
                //     {/*<div className='item_price_container'>*/}
                //     {/*    <IconCheckboxes onClick={()=>setIsLiked(!isLiked)}/>*/}
                //     {/*    <p className='login-wrapper__name'> Price: {price}</p>*/}
                //     {/*</div>*/}
                //
                //
                // </div>
            ))}

            <SelectVariants/>
            <Like/>

        </div>
    );
};

export default Liked;
