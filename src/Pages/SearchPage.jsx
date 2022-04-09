import React from 'react';
import axiosHotels from "../ components/axiosHotels";
import Item from "../ components/Item";

const SearchPage = ({setToken}) => {

    axiosHotels()

    const handleExit = () => {
        localStorage.clear()
        setToken('')

    }
    return (
        <div>
            <button onClick={( )=>handleExit()}>  выход</button>
            main
            <Item/>
        </div>
    );
};

export default SearchPage;
