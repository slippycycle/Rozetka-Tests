import React from 'react'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePage.module.scss'

interface DevicePageTopComponentProps {
    device : DeviceI
}

export default function DevicePageTopComponent({device}:DevicePageTopComponentProps) {
    return (
        <div className={c.device_top_conatiner}>{device?.faceDescription}</div>
    )
}
