import React, {useEffect, useState} from 'react';
import Item from "./Item";
import axiosHotels from "../axiosHotels";
import './ItemList.css'

const ItemList = () => {
    const [state, setState] = useState(null)

    async  function getData() {
        const data = await axiosHotels()
        setState(data.hotels)
        // add()
    }


    // const state = useSelector(state => state.catalog)
    const add = () => {
      setState([...state,state?.map((el)=>el.liked = false)])
    }



    useEffect( ()=>{
        getData()
    },[])
    console.log(state)



    return (
        <div>
            <div className='item_list__items'>
                {state?.map((el)=>(
                    <Item label={el.label}  price={el.id} rating={el._score}/>
                ))}
            </div>


        </div>
    );
};

export default ItemList;
