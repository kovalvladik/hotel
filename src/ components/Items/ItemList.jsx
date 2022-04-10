import React, {useEffect, useState} from 'react';
import Item from "./Item";
import axiosHotels from "../axiosHotels";
import './ItemList.css'
import {useDispatch, useSelector} from "react-redux";
import {getCatalog, updateCatalog} from "../../redux/reducers";

const ItemList = () => {
    const [state, setState] = useState(null)
    const dispatch = useDispatch()

    const catalog = useSelector(state => state.catalog)


    async  function getData() {
        const data = await axiosHotels()
        // dispatch(getCatalog([data?.hotels?.forEach((el)=>el.liked = false)]))
        dispatch(getCatalog(data.hotels))
        setState([...data.hotels])
    }


    // const state = useSelector(state => state.catalog)




    useEffect( ()=>{
        getData()

    },[])
    console.log(state)



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
