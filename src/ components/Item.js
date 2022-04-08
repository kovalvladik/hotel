import React, {useEffect, useState} from 'react';
import axiosHotels from "./axiosHotels";

const Item = () => {

    const [state, setState] = useState(null)

  async  function getData() {
        const data = await axiosHotels()
      setState(data)
      console.log(state.resolve())
    }


    useEffect( ()=>{
        getData()
    },[])
    console.log(state)


    return (
        <div>

        </div>
    );
};

export default Item;
