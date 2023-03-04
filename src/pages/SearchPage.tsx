import React from 'react'
import LeftMobileFilter from '../components/LeftMobileFilter'
import SearchHeader from '../components/SearchHeader'
import SearchPageDevicesPanel from '../components/SearchPageDevicesPanel'
import SerachPageFilter from '../components/SerachPageFilter'
import { AllBrandsContex, MobileSortActive } from '../context'
import c from '../styles/SearchPage.module.scss'


export default function SearchPage() {

  let searchQuerry = window.location.pathname.replaceAll('/', '').replace('search', '')



  const [active, setActive] = React.useState(false)
  const [brands, setBrands] = React.useState(['apple', 'samsung', 'xiaomi', 'SONY'])

  const [isSomethingFounded, setIssomethingFounded] = React.useState<boolean>(false)

  function handleMenuState() {
    setActive(active => !active)
  }



  return (

    <div  className={c.main_wrap}>
      <MobileSortActive.Provider value={{ active, handleMenuState }} >
        <AllBrandsContex.Provider value={{ brands }}>

          <LeftMobileFilter />
          <SearchHeader searchQuerry={searchQuerry} />
          <div className={c.wrap}>
            <SerachPageFilter  />
            <SearchPageDevicesPanel query={searchQuerry} />
          </div>

        </AllBrandsContex.Provider>

      </MobileSortActive.Provider>
    </div>

  )
}
