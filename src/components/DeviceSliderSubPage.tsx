import React from 'react'
import { urlImg } from '../models/models'
import DeviceSlider from './Slider'
import c from '../styles/DeviceSliderSubPage.module.scss'


interface DeviceSliderSubPageProps  { 
    src: urlImg[]
}

export default function DeviceSliderSubPage({src}:DeviceSliderSubPageProps) {
  return (
    <div className={c.device__slider}>
           <DeviceSlider src={src} />
    </div>
  )
}
