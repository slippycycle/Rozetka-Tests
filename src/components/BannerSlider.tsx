import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

import "../styles/BannerSlider.css";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";

export default function BannerSlider() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <img src={'https://content2.rozetka.com.ua/files/images/original/315022359.jpg'} />
                    </div>
                </SwiperSlide>
              
                <SwiperSlide>
                    <div className='slider-img-container-banner'>
                        <img src={'https://blog.daraz.pk/wp-content/uploads/2020/03/LAPTOP-BANNER.jpg'} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='slider-img-container-banner'>
                        <img src={'https://thumbs.dreamstime.com/b/vector-banner-iphone-vinnytsia-ukraine-september-illustration-app-web-presentation-design-229970813.jpg'} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );



}
