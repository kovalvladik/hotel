import React from 'react';
import './Main.css'
import Carusel from "../Carusel/Carusel";
import ItemList from "../Items/ItemList";

const Main = () => {
    return (
        <div className='main__container'>
            <p className='liked__name'>Избранное</p>
            <p className='liked__name'>Избранное</p>
            <div className='main_carusel_container'>
                <Carusel/>
            </div>

            <p className='liked__name'>Избранное</p>
            <ItemList/>


        </div>
    );
};

export default Main;
