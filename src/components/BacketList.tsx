import axios from 'axios'
import React from 'react'
import { DeviceI } from '../models/models'
import { setDevicesFromBacket } from '../store/features/Backet.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/Backet.module.scss'
import { DeviceItemFromBacket } from './DeviceItemFromBacket'

interface BacketListProps {
    devicesidArray: any[]
}

export default function BacketList({ devicesidArray }: BacketListProps) {

    const dispatch = useAppDispatch()


    return (
        <div className={c.backet_list}>
            {devicesidArray?.map((id) => <DeviceItemFromBacket key={id} id={id} />)}
        </div>
    )
}
