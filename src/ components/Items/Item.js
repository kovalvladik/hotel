import React, {useEffect, useState} from 'react';
import axiosHotels from "../axiosHotels";
import Carusel from "../Carusel/Carusel";
import DatePick from "../DataPick/DatePick";


const Item = () => {

    const [state, setState] = useState(null)

  async  function getData() {
        const data = await axiosHotels()
      setState(data)
    }


    useEffect( ()=>{
        getData()
    },[])




    return (
        <div>
            {state?.hotels.map((items)=>(
                <div>
                    {items.label}
                </div>
            ))}
            <DatePick/>
        </div>
    );
};

export default Item;
