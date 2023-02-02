import React from 'react'
import c from '../styles/SortbyBrandsLeftBar.module.scss'

interface SortbyBrandsLeftBarOnterface {
    brands: string[] | string
}


export default function SortbyBrandsLeftBar({brands}:SortbyBrandsLeftBarOnterface) {
  return (
    <div className={c.container}>SortbyBrandsLeftBar</div>
  )
}
