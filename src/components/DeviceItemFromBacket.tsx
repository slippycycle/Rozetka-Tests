import axios from 'axios'
import React from 'react'
import { DeviceI } from '../models/models'
import { deleteDevice, pushDevice } from '../store/features/Backet.Slice'
import { useAppDispatch } from '../store/hooks'
import c from '../styles/Backet.module.scss'

interface DeviceItemFromBacketProps {
    id: string | number
}

export function DeviceItemFromBacket({ id }: DeviceItemFromBacketProps) {



    return (


        <>
            <h2>{id}</h2>
            <button onClick={() => {localStorage.clear()}} >lceate</button>
        </>



    )
}