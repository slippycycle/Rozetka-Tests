import React from 'react'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI
    //should rewrite type
}

export default function DeviceItem({ device }: DeviceItemProps) {


  if (device.colors) {
    //as first photo by first color
    console.log(device.images[device.colors[0]][0])
  }

    return (
        <div className={c.device_item}>
            <div className={c.image_container}>
                <img src={device.colors? device.images[device.colors[0]][0] as string : 'image'} />
            </div>
            <div className={c.device_item_info_block}>
                <p className={c.name_header}>
                    {device.name}
                </p>
                <p>
                    {device.colors ? device.faceDescription: 'wda'}
                </p>
            </div>
            <div className={c.item__bottom__container}>
               <p>{device.price}</p>
               <button>Add</button>
            </div>
        </div>
    )
}
