import { render } from '@testing-library/react'
import React from 'react'
import { DeviceI } from '../models/models'
import { handleBacket } from '../store/features/Backet.Slice'
import { useAppDispatch } from '../store/hooks'
import { AppDispatch } from '../store/store'

import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI,
    dispatch: AppDispatch
    handleBacketFn: Function
}

export default function DeviceItem({ device,dispatch,handleBacketFn }: DeviceItemProps) {

     
    
    function handleDevicebacket() {
        
        let currentBcket = JSON.parse(localStorage.getItem('backet') as string)
        
        
        if (!Array.isArray(currentBcket)) {
            
            let stertArray = []
            stertArray.push(device.id)
            
            localStorage.setItem('backet', JSON.stringify(stertArray))
            

        }
        if (Array.isArray(currentBcket)) {
            
            if (currentBcket.find((el) => el == device.id)) {
                //already included 
                dispatch(handleBacket())
            }
            else {
                let result = currentBcket
                result.push(device.id)
                localStorage.setItem('backet', JSON.stringify(result))
            }

        }


        console.log(localStorage.getItem('backet'))
    }

    return (
        <div className={c.device_item}>

            <div className={c.image_container}>
                <img src={device.colors ? device.images[device.colors[0]][0] as string : 'image'} />
            </div>
            <div className={c.device_item_info_block}>
                <p className={c.name_header}>
                    {device.name}
                </p>
                <p>
                    {device.colors ? device.faceDescription : 'wda'}
                </p>
                <div className={true? c.price__backet__conatiner : c.a}>
                    <p>{device.price}</p>
                    <button className={c.backet_button} onClick={handleDevicebacket}>Add</button>
                </div>
            </div>
        </div>
    )
}

