import React from 'react'
import { fetchDevice } from '../API/fetchDevice'
import { DeviceI, DeviceId } from '../models/models'
import { pushViewedDevice } from '../store/features/ViewedDevices.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/ViewedeDeviceItem.module.scss'

interface ViewedeDeviceItem {
    deviceI: DeviceI
}



export default function ViewedeDeviceItem({ deviceI }: ViewedeDeviceItem) {




    return (
        <div className={c.cart}>
            <label>
                open
            </label>
            <div className={c.image_container}>
                <img alt={`photo ${deviceI?.faceDescription}`} src={deviceI.images[deviceI.colors[0]][0]} />
            </div>
            <div className={c.text_wrap}>
                <p>
                    {deviceI?.faceDescription}
                </p>
            </div>
        </div>
    )
}
