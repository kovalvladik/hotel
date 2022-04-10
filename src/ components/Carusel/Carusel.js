import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Carusel.css'

// import "./styles.css";
import { Pagination } from "swiper";

export default function Carusel() {
    return (
        <>
            <Swiper
                slidesPerView={3.3}
                spaceBetween={5}
                // pagination={{
                //     clickable: true,
                // }}
                // modules={[Pagination]}
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
