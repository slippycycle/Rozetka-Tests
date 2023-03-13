import React from 'react'
import c from '../styles/DevicesComponents.module.scss'
import DevicePanel from './DevicesPanel'
import LeftFilter from './LeftFilter'

export default function ComponentsCategory() {

  console.log('ComponentsCategory render')

  return (
    <div className={c.wrap}>
        <LeftFilter />
        <DevicePanel />
    </div>
  )
}
