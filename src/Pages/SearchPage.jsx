import React from 'react';
import axiosHotels from "../ components/axiosHotels";
import Item from "../ components/Items/Item";
import './SearchPage.css'
import Liked from "../ components/Liked/Liked";
import Main from "../ components/Main/Main";
import DatePick from "../ components/DataPick/DatePick";

const SearchPage = ({setToken}) => {

    axiosHotels()

    const handleExit = () => {
        localStorage.clear()
        setToken('')

    }
    return (
        <div className='page_container'>
            <button onClick={( )=>handleExit()}>  выход</button>
            main
            <div className='page_left'>
                <DatePick/>
                <Liked/>
            </div>
            <div className='page_right'>
                <Main/>
            </div>
        </div>
    );
};

export default SearchPage;
