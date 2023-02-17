
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import { urlImg } from "../models/models";


interface DeviceSliderProps {
    src: urlImg[]
}

export default function DeviceSlider({ src }: DeviceSliderProps) {




    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                pagination={{
                    type: "fraction",
                }}
                className="mySwiper">
                {src.map((img) =>
                    <SwiperSlide><img src={img} /></SwiperSlide>
                )}
            </Swiper>
        </>
    );
}



