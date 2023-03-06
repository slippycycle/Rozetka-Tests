import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

import c from '../styles/RecentlyViewedDevices.module.scss'
import ViewedeDeviceItem from "./ViewedeDeviceItem";
import { DeviceI, DeviceId } from "../models/models";
import { devices } from "../consts";
import { useAppSelector } from "../store/hooks";


export default function RecentlyViewedDevices() {


  const [devicesId, setDevicesId] = React.useState<DeviceId[]>([])


  const [devicesB, setDevicesB] = React.useState<DeviceI[]>([])

  const { viewedDevices } = useAppSelector(state => state.viewedReducer)

  console.log(viewedDevices);


  React.useEffect(() => {
    console.log(devicesB)
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') as string)
    setDevicesId(recentlyViewed)
    //http://localhost:3001/products?id=5&id=4
  }, [])

  return (
    <div className={c.wrap}>
      <h1>Recently viewed</h1>
      <div className={c.slider_container}>

        <div className={c.fourtneen_slider}>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {devicesId.map((dev) =>
              <SwiperSlide key={dev} ><ViewedeDeviceItem id={dev} /></SwiperSlide>
            )}

          </Swiper>
        </div>
        <div className={c.treeple_slider}>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={false}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {devicesId.map((dev) =>
              <SwiperSlide key={dev} ><ViewedeDeviceItem id={dev} /></SwiperSlide>
            )}

          </Swiper>
        </div>
        <div className={c.double_slider}></div>



      </div>
    </div>
  )
}
