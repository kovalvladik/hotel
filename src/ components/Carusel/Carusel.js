import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Carusel.css'

export default function Carusel() {
    return (
        <>
            <Swiper
                slidesPerView={3.7}
                spaceBetween={5}
                className="mySwiper"
            >
                <SwiperSlide className='slide1'></SwiperSlide>
                <SwiperSlide className='slide2'></SwiperSlide>
                <SwiperSlide className='slide3'></SwiperSlide>
                <SwiperSlide className='slide4'></SwiperSlide>
                <SwiperSlide className='slide1'></SwiperSlide>
                <SwiperSlide className='slide2'></SwiperSlide>
                <SwiperSlide className='slide3'></SwiperSlide>
                <SwiperSlide className='slide4'></SwiperSlide>
            </Swiper>
        </>
    );
}
