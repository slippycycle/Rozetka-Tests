import axios from 'axios'
import React from 'react'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/Backet.module.scss'
import { DeviceItemFromBacket } from './DeviceItemFromBacket'

interface BacketListProps {
    devicesidArray: any[]
}

export default function BacketList({ devicesidArray }: BacketListProps) {

    return (
        
        <div className={c.backet_list}>
            {devicesidArray?.map((id) => <DeviceItemFromBacket key={id} id={id} />)}
        </div>
    )
}
