import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/DevicesComponents.module.scss'
import DevicePanel from './DevicePanel'
import SortbyBrandsLeftBar from './SortbyBrandsLeftBar'

 


export default function ComponentsCategory() {
    
    return (
        <div className={c.wrap}>
          <SortbyBrandsLeftBar/>
          <DevicePanel/>
        </div>
    )
}
