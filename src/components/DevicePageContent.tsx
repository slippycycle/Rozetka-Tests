import React from 'react'
import Swiper from 'swiper'
import { colors, DeviceI } from '../models/models'
import c from '../styles/DevicePage.module.scss'
import SwiperSlider from './DevicePageSlider'
import CustomArrows from './DevicePageSlider'


interface DevicePageContent {
    device: DeviceI
}


export default function DevicePageContent({ device }: DevicePageContent) {


    const [currentColor, setCurrentColor] = React.useState(device?.colors[0])




    const take = device?.colors[0]

    console.log('current slicer', device?.images[currentColor])

    console.log(currentColor)

    return (
        <div>
            <SwiperSlider/>
            <div>
                {device?.colors ?
                    device.colors.map((col) => <div onClick={() => {setCurrentColor(col)}} className={c['color__item__' + col]}></div>)
                    : null
                }
            </div>
        </div>
    )
}
