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

    const days = useSelector(state => state.days)
    const city = useSelector(state => state.city)
    const year = useSelector(state => state.year)
    const month = useSelector(state => state.month)
    const day = useSelector(state => state.day)

    console.log(year)
    console.log(month)
    console.log(day)

    const enteredDays = useSelector(state => state.enteredDays)

    // dispatch({type:'LIKED',args:price})

    const cityHandler = () => {
        dispatch(updateCity(cityText))


    }

    const [startDate, setStartDate] = useState(new Date());
    const [daysText, setDaysText] = useState(1);
    const [cityText, setCityText] = useState('Москва' );

    //
    // useEffect(()=>{
    //     const day1 = startDate?.getDate()
    //     const month1 = startDate?.getMonth()
    //     const year1 = startDate?.getFullYear()
    //     dispatch(updateDate({day1, month1, year1}))
    //
    //
    //     // dispatch({type:'UPDATE_DATE',args:{day1,month1,year1}})
    //
    //
    // },[startDate])

    // useEffect(()=>{
    //     // dispatch({type:'DAYS',args:Number(daysText)})
    //     dispatch(updateDays(daysText))
    //
    // },[daysText])

    const allUpdate = () => {
        cityHandler()
        dispatch(updateDays(daysText))
        const day1 = startDate?.getDate()
        const month1 = startDate?.getMonth()
        const year1 = startDate?.getFullYear()
        dispatch(updateDate({day1, month1, year1}))

    }





    console.log(startDate.getDate())
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
