import React, {useEffect, useState} from 'react';
import axiosHotels from "../axiosHotels";
import Carusel from "../Carusel/Carusel";
import DatePick from "../DataPick/DatePick";
import BasicRating from "../Liked/Rating";
import HomeIcon from '@mui/icons-material/Home';
import IconCheckboxes from "../Liked/Like";
import './Item.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteLike, liked, updateLikedItems} from "../../redux/reducers";



const Item = ({price,rating,label,id}) => {

    const [isLiked,setIsLiked] = useState(false)

    const day = useSelector(state => state.day)
    const month = useSelector(state => state.month)
    const year = useSelector(state => state.year)
    const enteredDays = useSelector(state => state.days)
    const dispatch = useDispatch()
    const [monthUpdate, setMonthUpdate] = useState('')

    //
    // useEffect(() => {
    //     dispatch({type:'LOAD_SINGLE_CHARACTER',args:id})
    //     console.log('111')
    // }, [])

    const catalog = useSelector(state => state.catalog)



    const rr = () => {
        if (isLiked===true){
            dispatch(deleteLike(id))
            dispatch(updateLikedItems())

        }else {

            dispatch(liked(id))
            dispatch(updateLikedItems())

        }
    }
    const montheUpdate = () => {
        const  yearMonth =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',]

        setMonthUpdate(yearMonth[month])
    }
    useEffect(()=>{
        montheUpdate()
    },[month])

    // const character = useSelector(state => state.singleCharacter)



    return (
        <div className='item__container'>
            <div className='Icon__contsiner_main' >
                <div className='item_icon__container'>
                    <HomeIcon fontSize='large'/>
                </div>
            </div>

            <div className='item_name__container'>
                <p className='item__text'>{label}</p>
                <p className='item__text__new'>{day} {monthUpdate} {year} - {enteredDays}  день</p>
                    <BasicRating props={rating}/>
            </div>

            <div className='item_price_container'>
                <IconCheckboxes style={{paddingLeft:'100px'}} setIsLiked={setIsLiked} isLiked={isLiked} rr={rr}id={id} />
                <p className='login-wrapper__name'> Price: {price} ₽</p>
            </div>






        </div>
    );
};

export default Item;
