import React from 'react'
import { DeviceI } from '../models/models'
import c from '../styles/DevicePanel.module.scss'
import DeviceItem from './DeviceItem'


interface DeviceContainerProps {
    devicesArray: DeviceI[]
}

export default function DeviceContainer({ devicesArray }: DeviceContainerProps) {
    return (
        <>

            <div className={c.content}>
                {devicesArray?.map((dev) => <DeviceItem device={dev} />)}
            </div>

        </>
    )
}
