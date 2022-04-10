import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './DataPick.css'

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    return (
        <div className='data_pick__container'>
            <p className='data_pick__name'>Пароль</p>
            <input className='data_pick__input'/>
            <p className='data_pick__name'>Пароль</p>
            <DatePicker  className='data_pick__input' selected={startDate} onChange={(date) => setStartDate(date)} />
            <p className='data_pick__name'>Пароль</p>
            <input className='data_pick__input'/>
            <button className='data_pick__btn'>Найти</button>
        </div>

    );
};
 export default DatePick
