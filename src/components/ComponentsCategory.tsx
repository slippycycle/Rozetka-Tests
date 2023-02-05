import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/DevicesComponents.module.scss'
import Backet from './Backet'
import DevicePanel from './DevicePanel'
import SortbyBrandsLeftBar from './SortbyBrandsLeftBar'

 


export default function ComponentsCategory() {
    //after 880px wdth SortbyBrandsLeftBar will disappear 
    return (
        <div className={c.wrap}>
          <SortbyBrandsLeftBar/>
          <DevicePanel/>
         
        </div>
    )
}
