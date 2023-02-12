import React from 'react'
import c from '../styles/DevicesComponents.module.scss'
import DevicePanel from './DevicePanel'
import LeftFilter from './LeftFilter'




export default function ComponentsCategory() {
  //after 880px wdth SortbyBrandsLeftBar will disappear 
  return (
    <div className={c.wrap}>
      <LeftFilter />
      <DevicePanel />

    </div>
  )
}
