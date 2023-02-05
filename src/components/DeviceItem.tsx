import { render } from '@testing-library/react'
import React from 'react'
import { DeviceI } from '../models/models'

import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI
}

export default function DeviceItem({ device }: DeviceItemProps) {





 




    function handleDevicebacket() {

        let currentBcket = JSON.parse(localStorage.getItem('backet') as string)


        if (!Array.isArray(currentBcket)) {

            let stertArray = []
            stertArray.push(device.id)

            localStorage.setItem('backet', JSON.stringify(stertArray))


        }
        if (Array.isArray(currentBcket)) {

            if (currentBcket.find((el) => el == device.id)) {
                console.log('included')
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
                <div className={c.price__backet__conatiner}>
                    <p>{device.price}</p>
                    <button className={c.backet_button} onClick={handleDevicebacket}>Add</button>
                </div>
            </div>
        </div>
    )
}

