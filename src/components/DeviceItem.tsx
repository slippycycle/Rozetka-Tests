import React from 'react'
import { DeviceI } from '../models/models'
import { addSelectedDeviceId } from '../store/features/Backet.Slice'
import { removeSelectedDeviceId } from '../store/features/Backet.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/DevicePanel.module.scss'

interface DeviceItemProps {
    device: DeviceI
    alreadyInBacket: boolean
    //should rewrite type
}

export default function DeviceItem({ device, alreadyInBacket }: DeviceItemProps) {

    const {selectedDevicesId} = useAppSelector(state => state.backetReducer)

    const dispatch = useAppDispatch()

    function handleDevicebacket() {
        if (alreadyInBacket) {
            dispatch(removeSelectedDeviceId(device.id))
        }
        else {
            dispatch(addSelectedDeviceId(device.id))
        }

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
            </div>
            <div className={c.item__bottom__container}>
                <p>{device.price}</p>
                <button className={alreadyInBacket ? c.added_backet_button : c.backet_button} onClick={handleDevicebacket}>Add</button>
            </div>
        </div>
    )
}

