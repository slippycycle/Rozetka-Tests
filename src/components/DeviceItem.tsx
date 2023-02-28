import { render } from '@testing-library/react'
import React, { SyntheticEvent, useCallback, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DeviceI } from '../models/models'
import { handleBasket, makeRender } from '../store/features/Basket.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { AppDispatch } from '../store/store'

import c from '../styles/DeviceItem.module.scss'

interface DeviceItemProps {
    device: DeviceI,
    dispatch: AppDispatch
    handleBacketFn: Function
}

export default function DeviceItem({ device, dispatch, handleBacketFn }: DeviceItemProps) {


    
    let currentBcket = JSON.parse(localStorage.getItem('basket') as string)

    const {devices,devicesId} = useAppSelector(state => state.basketReducer)

    const {reload} = useAppSelector(state => state.basketReducer)

 
   console.log(currentBcket)

    function handleDevicebasket() {

        let currentBcket = JSON.parse(localStorage.getItem('basket') as string)
       


        if (!Array.isArray(currentBcket)) {

            let stertArray = []
            stertArray.push(device.id)
            localStorage.setItem('basket', JSON.stringify(stertArray))

        }
        if (Array.isArray(currentBcket)) {

            if (currentBcket.find((el) => el == device.id)) {
                //already included 
                dispatch(handleBasket())
            }
            else {
                //on success

                let result = currentBcket
                result.push(device.id)
                localStorage.setItem('basket', JSON.stringify(result))
                console.log(devicesId)
                // setActive(currentBcket?.length > 0 ? currentBcket.find((el) => el == device.id): false)
                dispatch(makeRender())

               
            }

        }

        // setActive(true)
        //currentBcket?.length > 0 ? currentBcket.find((el : string | number) => el == device.id): false ?

        dispatch(makeRender())
       
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
                    <button  type='button' className={ currentBcket.includes(device.id) ?c.backet_button_active :c.backet_button} onClick={handleDevicebasket}>Add</button>
                </div>
            </div>
        </div>
    )
}

