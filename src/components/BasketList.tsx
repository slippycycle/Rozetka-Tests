import React from 'react'
import c from '../styles/Basket.module.scss'
import { DeviceItemFromBasket } from './DeviceItemFromBasket'


interface BacketListProps {
    devicesidArray: any[]
}

export default function BasketList({ devicesidArray }: BacketListProps) {

    return (
        
        <div className={c.backet_list}>
            {devicesidArray?.map((id) => <DeviceItemFromBasket key={id} id={id} />)}
        </div>
    )
}
