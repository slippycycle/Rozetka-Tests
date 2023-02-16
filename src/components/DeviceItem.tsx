import { render } from '@testing-library/react'
import React, { SyntheticEvent, useCallback, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DeviceI } from '../models/models'
import { handleBacket } from '../store/features/Backet.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AppDispatch } from '../store/store'

import c from '../styles/DeviceItem.module.scss'

interface DeviceItemProps {
    device: DeviceI,
    dispatch: AppDispatch
    handleBacketFn: Function
}

export default function DeviceItem({ device, dispatch, handleBacketFn }: DeviceItemProps) {


    
    let currentBcket = JSON.parse(localStorage.getItem('backet') as string)

    const {devices,devicesId} = useAppSelector(state => state.backetReducer)

    const [active,setActive] = React.useState(currentBcket?.length > 0 ? currentBcket.find((el : string | number) => el == device.id): false)
   
   

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
                //on success

                let result = currentBcket
                result.push(device.id)
                localStorage.setItem('backet', JSON.stringify(result))
                console.log(devicesId)
                setActive(currentBcket?.length > 0 ? currentBcket.find((el) => el == device.id): false)

               
            }

        }


       
    }

    let navigate = useNavigate()

    return (
        <div className={c.device_item}>

            <div className={c.image_container} onClick={() => { navigate(`/${device.type}/${device.id}`) }}>
                <img src={device.colors ? device.images[device.colors[0]][0] as string : 'image'} />
            </div>

            <div className={c.device_item_info_block}>
                <div className={c.device__text__block}>
                    <p className={c.name_header}>
                        {device.faceDescription?.length > 50 ? device.faceDescription.slice(0, 50) + '...' : device?.faceDescription}
                    </p>
                </div>
                <div className={c.deivce__item__button__block}>
                    
                    <p>{device.price}</p>
                    <button  type='button' className={active ?c.backet_button_active :c.backet_button} onClick={handleDevicebacket}>Add</button>
                </div>
            </div>
        </div>
    )
}

