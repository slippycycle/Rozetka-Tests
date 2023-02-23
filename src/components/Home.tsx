import React from 'react'
import c from '../styles/HomePage.module.scss'
import HorizontalBasket from './HorizontalBasket'

export default function Home() {
  return (
    <div className={c.home_container}>
       <HorizontalBasket/>

    </div>
  )
}
