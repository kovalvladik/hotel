import React, {useEffect, useState} from 'react';
import Item from "./Item";
import axiosHotels from "../axiosHotels";

const ItemList = () => {
    const [state, setState] = useState(null)

    async  function getData() {
        const data = await axiosHotels()
        setState(data)
    }


    useEffect( ()=>{
        getData()
    },[])

    console.log(state)


    return (
        <div>
            <Item/>
        </div>
    );
};

export default ItemList;
