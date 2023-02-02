import React from 'react'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI
}

export default function DeviceItem({ device }: DeviceItemProps) {
    return (
        <div className={c.device_item}>

            {device.name}
        </div>
    )
}
