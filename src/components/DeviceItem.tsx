import React from 'react'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI
}

export default function DeviceItem({ device }: DeviceItemProps) {
   
//  console.log(   device.images[0].urls);
   
    return (
        <div className={c.device_item}>
           <div>
            {/* <img src={'dawdwa'}/> */}
           </div>
            {device.name}
        </div>
    )
}
