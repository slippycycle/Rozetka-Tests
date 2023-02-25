import React from 'react'
import c from '../styles/HomePage.module.scss'
import BannerSlider from './BannerSlider'
import HorizontalBasket from './HorizontalBasket'

export default function Home() {


  return (
    <div className={c.home_container}>
      <HorizontalBasket />
      <div className={c.banner_wrap}>
        <BannerSlider />
      </div>
    </div>
  )
}
