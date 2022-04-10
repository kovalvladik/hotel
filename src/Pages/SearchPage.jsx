import React from 'react';
import axiosHotels from "../ components/axiosHotels";
import Item from "../ components/Items/Item";
import './SearchPage.css'
import Liked from "../ components/Liked/Liked";
import Main from "../ components/Main/Main";

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
            <Item/>
            <Liked/>
            <Main/>
        </div>
    );
};

export default SearchPage;
