import React from 'react'
import c from '../styles/DevicesComponents.module.scss'
import DevicePanel from './DevicesPanel'
import LeftFilter from './LeftFilter'




export default function ComponentsCategory() {
  
  const takeCurrentType = window.location.pathname.slice(1, 100).replaceAll('/', '')

  console.log('ComponentsCategory render')

  return (
    <div className={c.wrap}>
      <LeftFilter />
      <DevicePanel  takeCurrentType={takeCurrentType}/>
    </div>
  )
}
