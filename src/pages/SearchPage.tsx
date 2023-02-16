import React from 'react'
import LeftMobileFilter from '../components/LeftMobileFilter'
import SearchHeader from '../components/SearchHeader'
import SearchPageDevicesPanel from '../components/SearchPageDevicesPanel'
import SerachPageFilter from '../components/SerachPageFilter'
import SerchedDevices from '../components/SerchedDevices'
import { AllBrandsContex, MobileSortActive } from '../context'
import { brand } from '../models/models'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SearchPage.module.scss'


export default function SearchPage() {

  let searchQuerry = window.location.pathname.replaceAll('/', '').replace('search', '')



  const [active, setActive] = React.useState(false)
  const [brands, setBrands] = React.useState(['apple', 'samsung', 'xiaomi', 'SONY'])


  function handleMenuState() {
    setActive(active => !active)
  }



  return (

    <div style={{ position: 'relative' }}>
      <MobileSortActive.Provider value={{ active, handleMenuState }} >
        <AllBrandsContex.Provider value={{ brands }}>

          <LeftMobileFilter />
          <SearchHeader searchQuerry={searchQuerry} />
          <div className={c.wrap}>
            <SerachPageFilter />
            <SearchPageDevicesPanel query={searchQuerry} />
          </div>

        </AllBrandsContex.Provider>

      </MobileSortActive.Provider>
    </div>

  )
}
