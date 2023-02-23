import React from 'react'
import CategoryLeftBar from '../components/CategoryLeftBar'
import Home from '../components/Home'
import c from '../styles/HomePage.module.scss'

export default function HomePage() {
  return (
    <div className={c.wrap}>
      <CategoryLeftBar />
      <Home />
    </div>
  )
}
