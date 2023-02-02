import React from 'react'
import { useAppSelector } from '../store/hooks'
import c from '../styles/DevicesComponents.module.scss'
import SortbyBrandsLeftBar from './SortbyBrandsLeftBar'

 
interface  DevicesComponentsprops {
  type: string
}

export default function DevicesComponents({type}:DevicesComponentsprops) {
    
    

    return (
        <div className={c.wrap}>
          <SortbyBrandsLeftBar/>
        </div>
    )
}
