import axios from 'axios'
import React from 'react'
import { DeviceI } from '../models/models'
import { setDevicesFromBacket } from '../store/features/Backet.Slice'
import { setCurrentPage } from '../store/features/Device.Slice'
import { setMaxRangePrice } from '../store/features/PriceRange'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/Backet.module.scss'

interface DeviceItemFromBacketProps {
    id: string | number
}


export function DeviceItemFromBacket({ id }: DeviceItemFromBacketProps) {
    
    const dispatch = useAppDispatch()
    

    const {devices,currentPage, loading,} = useAppSelector((state) => state.productReducer)

    

    function deleteHandleBacket() {
        let takeCurrentBasket = JSON.parse(localStorage.getItem('backet') as string)
        
        let result = takeCurrentBasket.filter((devId: string | number) => devId !== id)
        
        localStorage.setItem('backet', JSON.stringify(result))
        
        dispatch(setDevicesFromBacket(result))
  
        const tmp = currentPage 

      

       
         
        

    }


    return (

        <>
            <h2>{id}</h2>
            <button onClick={deleteHandleBacket} >delete</button>
        </>



    )
}