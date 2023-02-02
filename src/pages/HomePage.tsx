import React from 'react'
import Home from '../components/Home'
import LeftBar from '../components/LeftBar'
import ProductsComponent from '../components/ProductsComponents'
import c from '../styles/HomePage.module.scss'

export default function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      <LeftBar />
      <Home />
    </div>
  )
}
