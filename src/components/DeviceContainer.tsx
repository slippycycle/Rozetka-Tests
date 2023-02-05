import React from 'react'
import { DeviceI } from '../models/models'
import backetSlice from '../store/features/Backet.Slice'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'
import DeviceItem from './DeviceItem'


interface DeviceContainerProps {
    devicesArray: DeviceI[]
}

type backetArrayType = Array<string | number>

export default function DeviceContainer({ devicesArray }: DeviceContainerProps) {


     

   

    return (
        <>
            <div className={c.content}>
                {devicesArray?.map((dev) => <DeviceItem  device={dev} />)}
            </div>
        </>
    )
}
