import { render } from '@testing-library/react'
import React, { SyntheticEvent, useCallback, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DeviceI } from '../models/models'
import { handleBacket } from '../store/features/Backet.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AppDispatch } from '../store/store'

import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI,
    dispatch: AppDispatch
    handleBacketFn: Function
}

export default function DeviceItem({ device, dispatch, handleBacketFn }: DeviceItemProps) {



    const [isAdded, setIsadded] = React.useState<boolean>(false)

    let currentBcket = JSON.parse(localStorage.getItem('backet') as string)

    currentBcket.find((el: string) => el == device.id)

    function handleDevicebacket() {

        let currentBcket = JSON.parse(localStorage.getItem('backet') as string)
        setIsadded(true)

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

    let navigate = useNavigate()

    return (
        <div className={c.device_item}>

            <div className={c.image_container} onClick={() => { navigate(`/${device.type}/${device.id}`) }}>
                <img src={device.colors ? device.images[device.colors[0]][0] as string : 'image'} />
            </div>
            <div className={c.device_item_info_block}>
                <p className={c.name_header}>
                    {device.faceDescription?.length > 50 ? device.faceDescription.slice(0,49): 'a'}
                </p>
                <div className={true ? c.price__backet__conatiner : c.a}>
                    <p>{device.price}</p>
                    <button className={currentBcket.find((el: string) => el == device.id) ? c.backet_button_added : c.backet_button} onClick={handleDevicebacket}>Add</button>
                </div>
            </div>
        </div>
    )
}

