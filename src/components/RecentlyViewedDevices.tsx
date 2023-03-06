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
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchDevice } from "../API/fetchDevice";
import { pushViewedDevice } from "../store/features/ViewedDevices.Slice";


export default function RecentlyViewedDevices() {


  const [devicesId, setDevicesId] = React.useState<DeviceId[]>([])

  const [loading, setLoading] = React.useState<boolean>(true)

  const [devicesB, setDevicesB] = React.useState<DeviceI[]>([])

  const { viewedDevices } = useAppSelector(state => state.viewedReducer)

  console.log(viewedDevices);


  const dispatch = useAppDispatch()

  React.useEffect(() => {
    console.log(devicesB)
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') as string)
    setDevicesId(recentlyViewed)

    setLoading(true)

    for (let i = 0; i < recentlyViewed.length; i++) {

      fetchDevice(recentlyViewed[i]).then(res => {

        let device: DeviceI = res as DeviceI

        if (device.id) {

          if (device.images && device.id && device.colors && device.price) {
            

            dispatch(pushViewedDevice(device))


          }
        } else {

        }

      })

      if (i  == recentlyViewed.length - 1) {
        setLoading(false)
      }

    }


  }, [])

  return (
    <div className={c.wrap}>
      <h1>Recently viewed</h1>
      {loading ?
        <h1>Loading</h1>
        :

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
              {viewedDevices.map((dev) =>
                <SwiperSlide key={dev.id} ><ViewedeDeviceItem deviceI={dev} /></SwiperSlide>
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
              {viewedDevices.map((dev) =>
                <SwiperSlide key={dev.id} ><ViewedeDeviceItem deviceI={dev} /></SwiperSlide>
              )}


            </Swiper>
          </div>
          <div className={c.double_slider}>
            <Swiper
              slidesPerView={2}
              spaceBetween={0}
              freeMode={false}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {viewedDevices.map((dev) =>
                <SwiperSlide key={dev.id} ><ViewedeDeviceItem deviceI={dev} /></SwiperSlide>
              )}

            </Swiper>
          </div>



        </div>

      }

    </div>
  )
}
