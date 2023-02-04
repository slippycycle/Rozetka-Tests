import React from 'react'
import { DeviceI } from '../models/models'
import backetSlice from '../store/features/Backet.Slice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import DeviceItem from './DeviceItem'


interface DeviceContainerProps {
    devicesArray: DeviceI[]
}

export default function DeviceContainer({ devicesArray }: DeviceContainerProps) {

    const { selectedDevicesId } = useAppSelector(state => state.backetReducer)

    return (
        <>
            <div className={c.content}>
                {devicesArray?.map((dev) => <DeviceItem alreadyInBacket={selectedDevicesId.includes(dev.id)} device={dev} />)}
            </div>
        </>
    )
}
