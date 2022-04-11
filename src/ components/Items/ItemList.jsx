import React, {useEffect, useState} from 'react';
import Item from "./Item.js";
import axiosHotels from "../axiosHotels";
import './ItemList.css'
import {useDispatch, useSelector} from "react-redux";
import {getCatalog} from "../../redux/reducers.js";

const ItemList = () => {
    const [state, setState] = useState(null)
    const dispatch = useDispatch()
    const city = useSelector(state => state.city)

    async  function getData(city) {
        const data = await axiosHotels(city)
        // dispatch(getCatalog([data?.hotels?.forEach((el)=>el.liked = false)]))
        dispatch(getCatalog(data.hotels))
        setState([...data.hotels])
    }

    useEffect( ()=>{
        getData(city)

    },[city])

    return (
        <div>
            <div className='item_list__items'>
                {state?.map((el)=>(
                    <Item label={el.label}  price={el.locationId} rating={el._score} id={el.id}/>
                ))}
            </div>


        </div>
    );
};

export default ItemList;
