import { color } from '@mui/system'
import React from 'react'
import { basketItem } from '../models/models'
import c from '../styles/Basket.module.scss'
import { DeviceItemFromBasket } from './DeviceItemFromBasket'



interface BacketListProps {
    devicesIdArray: basketItem[]
}

export default function BasketList({ devicesIdArray }: BacketListProps) {

    console.log('OUR ENOMY ',devicesIdArray)

    return ( 
        <div className={c.backet_list}>
            {devicesIdArray?.map((bski:basketItem) => <DeviceItemFromBasket color={bski.color as string} key={bski.innerId + bski.id} id={bski.id}  innerId={bski.innerId}/>)}
        </div>
    )
}
