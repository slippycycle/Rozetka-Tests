import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/DevicesComponents.module.scss'
import DeviceContainer from './DeviceContainer'
import SortbyBrandsLeftBar from './SortbyBrandsLeftBar'

 


export default function ComponentsCategory() {
    
    

    return (
        <div className={c.wrap}>
          <SortbyBrandsLeftBar/>
          <DeviceContainer/>
        </div>
    )
}
