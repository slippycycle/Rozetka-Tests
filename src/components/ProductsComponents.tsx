import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/ProdcutsComponent.module.scss'
import BrandBar from './BrandBar'

export default function ProductsComponent() {



  const dispatch = useAppDispatch()



  return (
    <div className={c.products_container}>
      <BrandBar/>
    </div>
  )
}
