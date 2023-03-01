import React from 'react'
import c from '../styles/Basket.module.scss'
import { DeviceItemFromBasket } from './DeviceItemFromBasket'



interface BacketListProps {
    devicesIdArray: string[]
}

export default function BasketList({ devicesIdArray }: BacketListProps) {

    return (
        
        <div className={c.backet_list}>
            {devicesIdArray?.map((id) => <DeviceItemFromBasket key={id} id={id} />)}
        </div>
    )
}
