import React, {useEffect, useState} from 'react';
import './Main.css'
import Carusel from "../Carusel/Carusel";
import ItemList from "../Items/ItemList";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useDispatch, useSelector} from "react-redux";



const Main = () => {

    const [monthUpdate, setMonthUpdate] = useState('')

    const city = useSelector(state => state.city)
    const day = useSelector(state => state.day)
    const month = useSelector(state => state.month)
    const year = useSelector(state => state.year)
    const liked = useSelector(state => state.liked)
    const dispatch = useDispatch()


    const montheUpdate = () => {
      const  yearMonth =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',]

        setMonthUpdate(yearMonth[month])
    }
    useEffect(()=>{
        montheUpdate()
    },[month])

    console.log(day)
    return (
        <div className='main__container'>
             <div className='main_text__container'>
                 <p className='main__name'> Отели  <ArrowForwardIosIcon fontSize={"small"} />  {city}</p>
                 <p className='main__date'> {day} {monthUpdate} {year}</p>
             </div>

            <div className='main_carusel_container'>
                <Carusel/>
            </div>
            <div>
                <p className='main__liked-text'> Добавленно в Избранное {liked} отеля</p>
            </div>
            <div>
                <ItemList/>
            </div>

        </div>
    );
};

export default Main;
