import React, { useRef } from 'react'
import BrandsCheckList from '../components/BrandsCheckList'
import BrandsCheckListContainer from '../components/BrandsCheckListContainer'
import DeviceContainer from '../components/DeviceContainer'
import LeftFilter from '../components/LeftFilter'
import Loader from '../components/Loader'
import RangeContainer from '../components/RangeContainer'
import SearchHeader from '../components/SearchHeader'
import SearchPageDevicesPanel from '../components/SearchPageDevicesPanel'
import SerachPageFilter from '../components/SerachPageFilter'
import SerchedDevices from '../components/SerchedDevices'
import { fetchProducts } from '../store/features/Device.Slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import c from '../styles/SearchPage.module.css'


export default function SearchPage() {

  let searchQuerry = window.location.pathname.replaceAll('/', '').replace('search', '')


  // const dispatch = useAppDispatch()

  // const { error, loading, devices, currentSortType, currentPage, limit } = useAppSelector((state) => state.productReducer)

  // const { maxPrice, minPrice } = useAppSelector((state) => state.rangeReducer)

  // const brandStore = useAppSelector((state) => state.brandReducer)

  // const selectedBrandsRef = useRef(null)

  

  // React.useEffect(() => {

  //   if (maxPrice !== 200000 || minPrice > 0) {
  //     switch (currentSortType) {
  //         case 'rating':
  //             dispatch(fetchProducts({price_gte: minPrice, price_lte: maxPrice, _sort: 'rating', _order: 'desc', _page: currentPage, _limit: limit }))
  //             break;
  //         case 'expensive':
  //             dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice, _sort: 'price', _order: 'desc', _page: currentPage, _limit: limit }))
  //             break;
  //         case 'cheap':
  //             dispatch(fetchProducts({ price_gte: minPrice, price_lte: maxPrice,  _sort: 'price', _page: currentPage, _limit: limit }))
  //             break;
  //         default:
  //             dispatch(fetchProducts({  price_gte: minPrice, price_lte: maxPrice,  _page: currentPage, _limit: limit }))
  //     }

  //     return;
  // } 


  //   switch (currentSortType) {
  //     case 'rating':
  //       dispatch(fetchProducts({ q: searchQuerry,  brand:brandStore.selectedBrands, _sort: 'rating', _order: 'desc', }))
  //       break;
  //     case 'expensive':
  //       dispatch(fetchProducts({ q: searchQuerry,  brand:brandStore.selectedBrands, _sort: 'price', _order: 'desc', }))
  //       break;
  //     case 'cheap':
  //       dispatch(fetchProducts({ q: searchQuerry,  brand:brandStore.selectedBrands,_sort: 'price', }))
  //       break;
  //     default:
  //       dispatch(fetchProducts({ q: searchQuerry,  brand:brandStore.selectedBrands,}))

  //   }

  // }, [currentSortType, currentPage, limit, maxPrice, minPrice])


 
  



  return (
    <>
      {/* {!loading  && !brandStore.loading?
        <>
          <div className={c.wrap}>

            <div className={c.container}>
              <BrandsCheckList brandsList={['apple', 'samsung', 'xiaomi', 'XBOX']} />
              <RangeContainer />
            </div>

            <div className={c.devices__list__container}>
              <SearchHeader searchQuerry={searchQuerry} count={devices.length} />
              <SerchedDevices />
              <DeviceContainer devicesArray={devices} />
            </div>

          </div>

        </>

        :
        <Loader />

      } */}

      
      <div className={c.wrap}>
        <SerachPageFilter/>
        <SearchPageDevicesPanel query={searchQuerry}/>
      </div>
    </>
  )
}
