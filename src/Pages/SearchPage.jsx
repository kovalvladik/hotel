import React from 'react';
import axiosHotels from "../ components/axiosHotels";
import Item from "../ components/Item";

const SearchPage = () => {

    axiosHotels()
    return (
        <div>
            main
            <Item/>
        </div>
    );
};

export default SearchPage;
