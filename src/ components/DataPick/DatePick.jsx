import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import './DataPick.css'

import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {updateCity, updateDate, updateDays} from "../../redux/reducers";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePick = () => {

    const dispatch = useDispatch()

    const cityHandler = () => {
        dispatch(updateCity(cityText))


    }

    const [startDate, setStartDate] = useState(new Date());
    const [daysText, setDaysText] = useState(1);
    const [cityText, setCityText] = useState('Москва' );


    const allUpdate = () => {
        cityHandler()
        dispatch(updateDays(daysText))
        const day1 = startDate?.getDate()
        const month1 = startDate?.getMonth()
        const year1 = startDate?.getFullYear()
        dispatch(updateDate({day1, month1, year1}))

    }

    return (
        <div className='data_pick__container'>
            <p className='data_pick__name'> Локация</p>
            <input className='data_pick__input' onChange={(e)=>setCityText(e.target.value)} value={cityText}/>
            <p className='data_pick__name'>Дата заселения</p>
            <DatePicker  className='data_pick__input' selected={startDate} onChange={(date) => setStartDate(date)} />
            <p className='data_pick__name'>Колличество дней</p>
            <input onChange={(e)=>setDaysText(e.target.value)} className='data_pick__input' value={daysText}/>
            <button onClick={()=>allUpdate()} className='data_pick__btn'>Найти</button>
        </div>

    );
};
 export default DatePick
