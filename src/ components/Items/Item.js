import React, {useEffect, useState} from 'react';
import axiosHotels from "../axiosHotels";
import Carusel from "../Carusel/Carusel";
import DatePick from "../DataPick/DatePick";
import BasicRating from "../Liked/Rating";
import HomeIcon from '@mui/icons-material/Home';
import IconCheckboxes from "../Liked/Like";
import './Item.css'
import {useDispatch, useSelector} from "react-redux";



const Item = ({price,rating,label}) => {

    const [isLiked,setIsLiked] = useState(false)


console.log(price)
console.log(rating)
console.log(label)
    const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch({type:'LOAD_SINGLE_CHARACTER',args:id})
    //     console.log('111')
    // }, [])

    const character = useSelector(state => state.singleCharacter)

        useEffect(()=>{
            if (isLiked===true){
                dispatch({type:'LIKED',args:price})
                console.log(isLiked,price)
            }else {
                dispatch({type:'DELETE_LIKE',args:price})

            }

        },[isLiked])

    return (
        <div className='item__container'>
            <div className='item_icon__container'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='item_name__container'>
                <p className=''>{label}</p>
                <p className=''> day</p>
                    <BasicRating props={rating}/>
            </div>

            <div className='item_price_container'>
                <IconCheckboxes setIsLiked={setIsLiked} isLiked={isLiked}/>
                <p className='login-wrapper__name'> Price: {price}</p>
            </div>






        </div>
    );
};

export default Item;
