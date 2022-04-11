import React from 'react';
import axiosHotels from "../ components/axiosHotels.js";
import './SearchPage.css'
import Liked from "../ components/Liked/Liked.jsx";
import Main from "../ components/Main/Main.jsx";
import DatePick from "../ components/DataPick/DatePick.jsx";
import LogoutIcon from '@mui/icons-material/Logout';

const SearchPage = ({setToken}) => {

    axiosHotels()

    const handleExit = () => {
        localStorage.clear()
        setToken('')

    }
    return (
        <>
            <div className='btn__container'>
                <p className='lable__text'>Simple Hotel Check </p>
                <div className='exit__container'>
                    <p className='btn__text'>Выйти </p>
                    <button className='btn' onClick={( )=>handleExit()}>   <LogoutIcon/></button>
                </div>

            </div>
            <div className='page_container'>
                <div className='page_left'>
                    <DatePick/>
                    <Liked/>
                </div>
                <div className='page_right'>
                    <Main/>
                </div>
            </div>
        </>

    );
};

export default SearchPage;
